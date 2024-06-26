import express, { Express, RequestHandler, ErrorRequestHandler } from "express";
import http from "node:http";
import { ScheduledTask } from "node-cron";

import environment from "@environment";

import terminus from "./terminus";

const { hostname, port } = environment.app;

const createExpress = ({
  middlewares,
  routers,
  crons,
  exceptionHandlers: { notFoundHandler, errorHandler },
}: {
  middlewares: RequestHandler[];
  routers: [string, RequestHandler][];
  crons: ScheduledTask[];
  exceptionHandlers: {
    notFoundHandler: RequestHandler;
    errorHandler: ErrorRequestHandler;
  };
}) => {
  const app: Express = express();

  for (const middleware of middlewares) {
    app.use(middleware);
  }

  for (const [route, router] of routers) {
    app.use(`${environment.app.routePrefix}${route}`, router);
  }

  for (const cron of crons) {
    cron.start();
  }

  app.all("*", notFoundHandler);
  app.use(errorHandler);

  const server = http.createServer(app);
  terminus(server);
  server.listen(port, hostname);

  return Promise.resolve();
};

export default createExpress;
