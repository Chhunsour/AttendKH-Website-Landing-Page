import { NextResponse } from "next/server";
import { recordNewsletterSubscriber } from "@/lib/db";
import { NewsletterSubscribeSchema } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = NewsletterSubscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { email, source_page } = result.data;
    const res = await recordNewsletterSubscriber(email, source_page || "/");

    return NextResponse.json({
      success: true,
      message: res.is_new ? "Subscribed successfully" : "Email is already subscribed",
    });
  } catch (error) {
    console.error("Error subscribing newsletter:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
