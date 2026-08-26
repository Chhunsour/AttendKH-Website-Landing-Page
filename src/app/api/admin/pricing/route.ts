import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getPricingPlans, createPricingPlan, updatePricingPlan, deletePricingPlan, getPricingPlanById } from "@/lib/db";
import { PricingPlanSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";

export async function GET() {
  try {
    const plans = await getPricingPlans(false);
    return NextResponse.json({ plans });
  } catch (error: any) {
    console.error("Failed to fetch pricing plans:", error);
    return NextResponse.json({ error: "Failed to fetch pricing plans" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const result = PricingPlanSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const id = data.id || `plan_${data.slug}_${Date.now()}`;

    const plan = await createPricingPlan({
      id,
      slug: data.slug,
      name: data.name,
      description: data.description || null,
      price_monthly: data.price_monthly,
      price_annual: data.price_annual,
      annual_factor: data.annual_factor,
      limits_text: data.limits_text,
      features: data.features,
      is_popular: data.is_popular,
      badge_text: data.badge_text || null,
      cta_text: data.cta_text,
      cta_url: data.cta_url,
      display_order: data.display_order,
      is_active: data.is_active,
    });

    await logAdminAction({
      session,
      action: "pricing_plan_created",
      targetEntity: "website_pricing_plans",
      targetId: plan.id,
      afterState: plan as any,
    });

    return NextResponse.json({ success: true, plan });
  } catch (error: any) {
    console.error("Failed to create pricing plan:", error);
    return NextResponse.json({ error: "Failed to create pricing plan" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const id = body.id;
    if (!id) {
      return NextResponse.json({ error: "Plan ID is required" }, { status: 400 });
    }

    const existing = await getPricingPlanById(id);
    if (!existing) {
      return NextResponse.json({ error: "Pricing plan not found" }, { status: 404 });
    }

    const result = PricingPlanSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const updated = await updatePricingPlan(id, result.data);

    await logAdminAction({
      session,
      action: "pricing_plan_updated",
      targetEntity: "website_pricing_plans",
      targetId: id,
      beforeState: existing as any,
      afterState: updated as any,
    });

    return NextResponse.json({ success: true, plan: updated });
  } catch (error: any) {
    console.error("Failed to update pricing plan:", error);
    return NextResponse.json({ error: "Failed to update pricing plan" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Plan ID is required" }, { status: 400 });
  }

  try {
    const existing = await getPricingPlanById(id);
    if (!existing) {
      return NextResponse.json({ error: "Pricing plan not found" }, { status: 404 });
    }

    await deletePricingPlan(id);

    await logAdminAction({
      session,
      action: "pricing_plan_deleted",
      targetEntity: "website_pricing_plans",
      targetId: id,
      beforeState: existing as any,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete pricing plan:", error);
    return NextResponse.json({ error: "Failed to delete pricing plan" }, { status: 500 });
  }
}
