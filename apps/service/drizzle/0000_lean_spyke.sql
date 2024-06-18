CREATE TABLE IF NOT EXISTS "words" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"target" text NOT NULL,
	"source" text NOT NULL,
	"target_language" text NOT NULL,
	"source_language" text NOT NULL,
	"category" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
