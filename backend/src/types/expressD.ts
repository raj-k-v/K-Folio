import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        user_handle: string;
      };
    }
  }
}
