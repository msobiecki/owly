import { pgTable, bigserial, timestamp } from "drizzle-orm/pg-core";

const words = pgTable("words", {
  id: bigserial("id", { mode: "number" }).primaryKey(),

  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export default words;
