import { recordAuditLog } from "./db";
import type { AdminSession } from "./auth";

export async function logAdminAction({
  session,
  action,
  targetEntity,
  targetId,
  beforeState,
  afterState,
  ipAddress,
}: {
  session: AdminSession;
  action: string;
  targetEntity: string;
  targetId?: string | null;
  beforeState?: Record<string, unknown> | null;
  afterState?: Record<string, unknown> | null;
  ipAddress?: string | null;
}) {
  try {
    await recordAuditLog({
      actor_id: session.id,
      actor_name: session.name,
      actor_email: session.email,
      action,
      target_entity: targetEntity,
      target_id: targetId || null,
      before_state: beforeState || null,
      after_state: afterState || null,
      ip_address: ipAddress || null,
    });
  } catch (err) {
    console.error("Failed to record audit log:", err);
  }
}
