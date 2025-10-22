import { NextResponse } from "next/server";
import type { MetricType } from "@prisma/client";
import { recordMetricCheckIn } from "@/lib/dashboard-data";

const METRIC_TYPES: MetricType[] = [
  "sleep_latency",
  "sleep_quality",
  "energy_stability",
  "focus_blocks",
  "mood_state",
  "stress_load",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { metric, value, goalId, protocolId, date } = body ?? {};

    if (typeof value !== "number" || !metric || !protocolId) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!METRIC_TYPES.includes(metric)) {
      return NextResponse.json({ error: "Invalid metric." }, { status: 400 });
    }

    const summary = await recordMetricCheckIn({
      metric,
      value,
      goalId,
      protocolId,
      date,
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Failed to record metric check-in", error);
    return NextResponse.json({ error: "Failed to save metric." }, { status: 500 });
  }
}
