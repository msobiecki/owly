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

export default router;
