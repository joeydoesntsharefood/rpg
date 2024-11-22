import { NextFunction, Request, Response } from "express";

const responseTimeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  const originalSend = res.send;

  res.send = function (body?: any): Response {
    const duration = Date.now() - start;

    console.log(`[${req.method}] ${req.originalUrl} - ${duration}ms - Status: ${res.statusCode}`);

    return originalSend.call(this, body);
  };

  next();
};

export { responseTimeMiddleware };