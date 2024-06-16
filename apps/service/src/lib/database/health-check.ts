import { HealthCheckError } from "@godaddy/terminus";

import database from "./setup";

const healthcheck = async () => {
  try {
    await database.query.words.findFirst();
  } catch (error) {
    throw new HealthCheckError("Database health check failed", [error]);
  }
};

export default healthcheck;
