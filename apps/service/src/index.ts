import dotenv from "dotenv";

import createExpress from "./lib/express";

import helmetMiddleware from "./lib/middlewares/helmet";
import cookieMiddleware from "./lib/middlewares/cookie";
import loggerMiddleware from "./lib/middlewares/logger";
import metricsMiddleware from "./lib/middlewares/metrics";

import swaggerRouter from "./lib/swagger";

import baseRouter from "./api/routes/base";
import meRouter from "./api/routes/me";

import banner from "./lib/express-banner";
import error from "./lib/express-error";

dotenv.config();

createExpress({
  middlewares: [
    helmetMiddleware,
    cookieMiddleware,
    loggerMiddleware,
    metricsMiddleware,
  ],
  routers: [
    ["/", swaggerRouter],
    ["/", baseRouter],
    ["/me", meRouter],
  ],
})
  .then(banner)
  .catch(error);
