import { Router } from "express";
import { getTopTracks } from "../controllers/spotify";

const router = Router();

router.get("/", getTopTracks);

export { router as spotifyRouter };