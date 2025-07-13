import "dotenv/config";
import express from "express";

import { healthCheckRouter } from "./routes/health-check";
import { spotifyRouter } from "./routes/spotify";
import { spotifyAuthMiddleware } from "./middlewares/spotify";

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/spotify", spotifyAuthMiddleware, spotifyRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});