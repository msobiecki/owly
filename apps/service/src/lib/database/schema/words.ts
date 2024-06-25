import { pgTable, bigserial, text, timestamp } from "drizzle-orm/pg-core";

const words = pgTable("words", {
  id: bigserial("id", { mode: "number" }).primaryKey(),

  level: text("level").notNull(),

  category: text("category").notNull(),

  target: text("target").notNull(),
  source: text("source").notNull(),

  target_language: text("target_language").notNull(),
  source_language: text("source_language").notNull(),

  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export default words;
