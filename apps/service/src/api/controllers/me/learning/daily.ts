import { Request, Response } from "express";

import { OK } from "../../../../utils/get-response-status-code";

const daily = (request: Request, response: Response) => {
  response.status(OK).json({
    metadata: {
      type: "word",
      language: {
        target: "en",
        source: "pl",
      },
    },
    data: {
      level: "B1",
      category: "Food",
      source: "jabłko",
      target: "apple",
    },
  });
};

export default daily;
