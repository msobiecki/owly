import { Request, Response } from "express";
import * as packageJson from "../../../../package.json";

import { OK } from "../../../utils/get-response-status-code";

const root = (request: Request, response: Response) => {
  response.status(OK).json({
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
  });
};

export default root;
