import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

const learnings = pgTable("learnings", {
  id: serial("id").primaryKey(),

  frequency: text("frequency").notNull(),

  type: text("type").notNull(),

  data_id: text("data_id").notNull(),

  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export default learnings;
