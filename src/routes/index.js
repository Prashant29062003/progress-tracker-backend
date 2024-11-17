import { Router } from "express";
import progressRoutes from "./progress.routes.mjs";
import chartRoutes from "./chart.routes.mjs";

const router = Router();

router.use("/progress", progressRoutes);
router.use("/chart", chartRoutes);

export default router;
