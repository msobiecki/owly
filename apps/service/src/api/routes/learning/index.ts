import express from "express";
import asyncHandler from "express-async-handler";

import * as learningController from "../../controllers/learning";

const router = express.Router();

/**
 * @swagger
 * /learning/words/daily:
 *   get:
 *     description: Retrieve the daily learning word.
 *     tags:
 *       - learning
 *     responses:
 *       200:
 *         description: Successful response with daily learning word.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     frequency:
 *                       type: string
 *                       example: daily
 *                     type:
 *                       type: string
 *                       example: words
 *                 data:
 *                   type: object
 *                   properties:
 *                     level:
 *                       type: string
 *                       example: A1
 *                     category:
 *                       type: string
 *                       example: Animals
 *                     source:
 *                       type: string
 *                       example: pies
 *                     target:
 *                       type: string
 *                       example: dog
 *       404:
 *         description: Daily learning word not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: NOT_FOUND
 *                 name:
 *                   type: string
 *                   example: NotFoundError
 *                 message:
 *                   type: string
 *                   example: The requested resource was not found.
 */
router.get(
  "/learning/words/daily",
  asyncHandler(learningController.words.daily),
);

export default router;
