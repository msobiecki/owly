import dotenv from "dotenv";

import createExpress from "@lib/express";
import banner from "@lib/express-banner";
import error from "@lib/express-error";
import { errorHandler, notFoundHandler } from "@lib/exception-handlers";

import {
  loggerMiddleware,
  metricsMiddleware,
  corsMiddleware,
  requestIpMiddleware,
  rateLimitMiddleware,
  helmetMiddleware,
  cookieMiddleware,
} from "@lib/middlewares";

import swaggerRouter from "@lib/swagger";

import baseRouter from "@routes/base";
import meRouter from "@routes/me";

import cronWordDaily from "@crons/cron-word-daily";

dotenv.config();

createExpress({
  middlewares: [
    loggerMiddleware,
    metricsMiddleware,
    corsMiddleware,
    requestIpMiddleware,
    rateLimitMiddleware,
    helmetMiddleware,
    cookieMiddleware,
  ],
  routers: [
    ["/", swaggerRouter],
    ["/", baseRouter],
    ["/me", meRouter],
  ],
  crons: [cronWordDaily],
  exceptionHandlers: {
    notFoundHandler,
    errorHandler,
  },
})
  .then(banner)
  .catch(error);
