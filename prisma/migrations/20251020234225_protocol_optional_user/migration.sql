-- AlterTable
ALTER TABLE "Protocol" DROP CONSTRAINT IF EXISTS "Protocol_userId_fkey";

ALTER TABLE "Protocol"
    ALTER COLUMN "userId" DROP NOT NULL;

ALTER TABLE "Protocol" DROP COLUMN "goals";
ALTER TABLE "Protocol" ADD COLUMN     "goals" JSONB NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE "Protocol" ADD COLUMN     "sessionToken" TEXT;
ALTER TABLE "Protocol" ADD COLUMN     "metadata" JSONB;

UPDATE "Protocol" SET "goals" = '[]'::jsonb WHERE "goals" = '[]'::jsonb; -- ensure default applied

ALTER TABLE "Protocol" ALTER COLUMN "goals" DROP DEFAULT;

CREATE UNIQUE INDEX IF NOT EXISTS "Protocol_sessionToken_key" ON "Protocol"("sessionToken");

ALTER TABLE "Protocol" ADD CONSTRAINT "Protocol_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
