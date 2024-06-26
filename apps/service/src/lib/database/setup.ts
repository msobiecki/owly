import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import environment from "@environment";

import * as schema from "./schema";

const { connectionString } = environment.database;

const pool = new Pool({ connectionString });
const database = drizzle(pool, { schema });

export default database;
