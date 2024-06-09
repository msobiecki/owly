import { Request, Response } from "express";
import { OK } from "http-status";

const daily = (request: Request, response: Response) => {
  response.status(OK).json({
    metadata: {
      language: {
        target: "en",
        source: "pl",
      },
      rewind: "daily",
      type: "word",
      category: "Food",
    },
    data: {
      source: "jabłko",
      target: "apple",
    },
  });
};

export default daily;
