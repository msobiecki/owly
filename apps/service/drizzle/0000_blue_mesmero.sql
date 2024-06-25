CREATE TABLE IF NOT EXISTS "learnings" (
	"id" bigint NOT NULL,
	"frequency" text NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "words" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"level" text NOT NULL,
	"category" text NOT NULL,
	"target" text NOT NULL,
	"source" text NOT NULL,
	"target_language" text NOT NULL,
	"source_language" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "learnings" ADD CONSTRAINT "learnings_id_words_id_fk" FOREIGN KEY ("id") REFERENCES "public"."words"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
