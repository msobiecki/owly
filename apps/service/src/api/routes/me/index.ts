import express from "express";

import * as meController from "../../controllers/me";

const router = express.Router();

/**
 * @swagger
 * /me/persist:
 *   get:
 *     description: Endpoint to persist user data.
 *     tags:
 *       - me
 *     responses:
 *       200:
 *         description: Successful response.
 */
router.get("/persist", meController.persist);

/**
 * @swagger
 * /me/learning/daily:
 *   get:
 *     description: Endpoint to retrieve daily learning data.
 *     tags:
 *       - me
 *     responses:
 *       200:
 *         description: Successful response with daily learning data.
 */
router.get("/learning/daily", meController.learning.daily);

export default router;
