CREATE TABLE IF NOT EXISTS "learnings" (
	"id" serial PRIMARY KEY NOT NULL,
	"frequency" text NOT NULL,
	"type" text NOT NULL,
	"data_id" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "level" text NOT NULL;