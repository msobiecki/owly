import { Request, Response } from "express";

import getResponseStatusCode, {
  NOT_FOUND,
  OK,
} from "@utils/get-response-status-code";

import database from "@database/setup";

const { code, name, message } = getResponseStatusCode(NOT_FOUND);

const daily = async (request: Request, response: Response) => {
  const dailyWord = await database.query.learnings.findFirst({
    columns: {
      frequency: true,
      type: true,
      data_id: true,
    },
    where: (learnings, { and, eq }) =>
      and(eq(learnings.frequency, "daily"), eq(learnings.type, "words")),
  });

  if (dailyWord) {
    const { frequency, type, data_id: wordId } = dailyWord;
    const word = await database.query.words.findFirst({
      where: (words, { eq }) => eq(words.id, wordId),
    });

    if (word) {
      const { level, category, source, target } = word;
      response.status(OK).json({
        metadata: {
          frequency,
          type,
        },
        data: {
          level,
          category,
          source,
          target,
        },
      });
    }
  } else {
    response.status(NOT_FOUND).json({ code, name, message });
  }
};

export default daily;
