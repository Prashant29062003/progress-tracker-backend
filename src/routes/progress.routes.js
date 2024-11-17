import { Router } from "express";
import progressController from "../controllers/progress.controller.mjs";
import { validateProgressLog } from "../validations/progress.validation.mjs";
import { validateRequest } from "../middlewares/validator.middleware.mjs";

const router = Router();

router.post(
  "/log",
  validateProgressLog(),
  validateRequest,
  progressController.createLog
);

router.get("/logs", progressController.getLogs);

export default router;
