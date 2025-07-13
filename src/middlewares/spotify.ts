import { NextFunction, Request, Response } from "express";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

export async function spotifyAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await fetch(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    const data = await result.json();

    console.log("the accesstoken", data);

    if (result.status === 200) {
      req.spotifyToken = data.access_token;
      next();
    }
  } catch (err) {
    console.log("error occured: ", err);
    res.status(500).json({
      message: "failed to authorize"
    })
  }
}