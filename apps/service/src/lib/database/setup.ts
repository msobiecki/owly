import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

const database = drizzle(pool, {
  schema,
});

export default database;
