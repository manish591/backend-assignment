import "dotenv/config";
import express from "express";

import { healthCheckRouter } from "./routes/health-check";
import { spotifyAuthMiddleware } from "./middlewares/spotify";

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/healthcheck", spotifyAuthMiddleware, healthCheckRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});