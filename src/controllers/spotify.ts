import { Request, Response } from "express";

export async function getTopTracks(req: Request, res: Response) {
  try {
    if (!req.spotifyToken) {
      res.status(401).json({
        message: "unauthorized",
      });
    }

    console.log("the token", `Bearer ${req.spotifyToken}`);

    const result = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10", {
      headers: {
        "Authorization": `Bearer ${req.spotifyToken}`
      }
    });

    if (result.status === 401) {
      res.status(401).json({
        message: "unauthorized",
      });
    }

    const data = await result.json();

    console.log("the data", data);

    if (data.status === 200) {
      res.status(200).json({
        message: "success"
      })
    }
  } catch (err) {
    console.log("error occured: ", err);
    res.status(500).json({
      message: "internal server error occured"
    });
  }
}