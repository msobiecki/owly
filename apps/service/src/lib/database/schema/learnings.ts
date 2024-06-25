import { pgTable, serial, text, bigint, timestamp } from "drizzle-orm/pg-core";
import words from "./words";

const learnings = pgTable("learnings", {
  id: serial("id").primaryKey(),

  frequency: text("frequency").notNull(),

  type: text("type").notNull(),

  data_id: bigint("id", { mode: "number" })
    .notNull()
    .references(() => words.id),

  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export default learnings;
