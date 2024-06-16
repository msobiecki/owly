import { HealthCheckError } from "@godaddy/terminus";

import database from "../database/setup";

const checkDatabaseConnection = async () => {
  try {
    await database.query.words.findFirst();
  } catch (error) {
    throw new HealthCheckError("Database health check failed", [error]);
  }
};

export default checkDatabaseConnection;
