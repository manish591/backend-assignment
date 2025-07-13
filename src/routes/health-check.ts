import { Router } from "express";
import { healthCheck } from "../controllers/health-check";

const router = Router();

router.get("/", healthCheck);

export { router as healthCheckRouter };