import 'express';

declare module 'express' {
  interface Request {
    spotifyToken?: string;
  }
}