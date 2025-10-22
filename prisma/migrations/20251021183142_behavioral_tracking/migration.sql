-- CreateEnum
CREATE TYPE "AnchorSlot" AS ENUM ('morning', 'daytime', 'evening');

-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('sleep_latency', 'sleep_quality', 'energy_stability', 'focus_blocks', 'mood_state', 'stress_load');

-- CreateEnum
CREATE TYPE "DigestCadence" AS ENUM ('weekly', 'biweekly', 'monthly');

-- CreateTable
CREATE TABLE "DailyAnchorLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "protocolId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyAnchorLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnchorCompletion" (
    "id" TEXT NOT NULL,
    "logId" TEXT NOT NULL,
    "slot" "AnchorSlot" NOT NULL,
    "anchorText" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "evidenceLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnchorCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricCheckIn" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "protocolId" TEXT,
    "logId" TEXT,
    "goalId" TEXT,
    "metric" "MetricType" NOT NULL,
    "value" INTEGER NOT NULL,
    "notes" TEXT,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetricCheckIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigestSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cadence" "DigestCadence" NOT NULL DEFAULT 'weekly',
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "lastSentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigestSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressMilestone" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "metadata" JSONB,
    "achievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProgressMilestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoalMetricPreference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "metric" "MetricType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoalMetricPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyAnchorLog_userId_date_key" ON "DailyAnchorLog"("userId", "date");

-- CreateIndex
CREATE INDEX "AnchorCompletion_slot_idx" ON "AnchorCompletion"("slot");

-- CreateIndex
CREATE INDEX "MetricCheckIn_metric_idx" ON "MetricCheckIn"("metric");

-- CreateIndex
CREATE INDEX "MetricCheckIn_goalId_idx" ON "MetricCheckIn"("goalId");

-- CreateIndex
CREATE INDEX "MetricCheckIn_recordedAt_idx" ON "MetricCheckIn"("recordedAt");

-- CreateIndex
CREATE UNIQUE INDEX "DigestSettings_userId_key" ON "DigestSettings"("userId");

-- CreateIndex
CREATE INDEX "ProgressMilestone_userId_achievedAt_idx" ON "ProgressMilestone"("userId", "achievedAt");

-- CreateIndex
CREATE UNIQUE INDEX "GoalMetricPreference_userId_goalId_metric_key" ON "GoalMetricPreference"("userId", "goalId", "metric");

-- AddForeignKey
ALTER TABLE "DailyAnchorLog" ADD CONSTRAINT "DailyAnchorLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyAnchorLog" ADD CONSTRAINT "DailyAnchorLog_protocolId_fkey" FOREIGN KEY ("protocolId") REFERENCES "Protocol"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnchorCompletion" ADD CONSTRAINT "AnchorCompletion_logId_fkey" FOREIGN KEY ("logId") REFERENCES "DailyAnchorLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricCheckIn" ADD CONSTRAINT "MetricCheckIn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricCheckIn" ADD CONSTRAINT "MetricCheckIn_protocolId_fkey" FOREIGN KEY ("protocolId") REFERENCES "Protocol"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricCheckIn" ADD CONSTRAINT "MetricCheckIn_logId_fkey" FOREIGN KEY ("logId") REFERENCES "DailyAnchorLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigestSettings" ADD CONSTRAINT "DigestSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgressMilestone" ADD CONSTRAINT "ProgressMilestone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoalMetricPreference" ADD CONSTRAINT "GoalMetricPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
