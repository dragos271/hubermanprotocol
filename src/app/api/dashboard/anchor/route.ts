import { NextResponse } from "next/server";
import { toggleAnchorCompletion } from "@/lib/dashboard-data";

const ALLOWED_SLOTS = ["morning", "daytime", "evening"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { anchorText, slot, completed, date, protocolId, completionId, logId } = body ?? {};

    if (!anchorText || !slot || !date || !protocolId) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!ALLOWED_SLOTS.includes(slot)) {
      return NextResponse.json({ error: "Invalid slot." }, { status: 400 });
    }

    const summary = await toggleAnchorCompletion({
      anchorText,
      slot,
      completed: Boolean(completed),
      completionId,
      logId,
      protocolId,
      date,
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Failed to toggle anchor completion", error);
    return NextResponse.json({ error: "Failed to update anchor." }, { status: 500 });
  }
}
