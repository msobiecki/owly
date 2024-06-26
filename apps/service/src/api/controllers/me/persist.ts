import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { OK } from "@utils/get-response-status-code";

const persist = (request: Request, response: Response) => {
  const hasPersist = !!request.signedCookies.uid;
  if (!hasPersist) {
    const uuid = uuidv4();
    response.cookie("uid", uuid, {
      httpOnly: true,
      signed: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
  }
  response.status(OK).json();
};

export default persist;
