import { Request, Response } from "express";

export async function healthCheck(req: Request, res: Response) {
  res.json({
    message: "success",
  })
}