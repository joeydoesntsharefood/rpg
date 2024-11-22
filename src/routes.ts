import { Router } from "express";
import userRouter from "./app/user/router/crud.route";
import { responseTimeMiddleware } from "./middlewares/responseTime.middleware";

const router = Router();

router.use("/auth", responseTimeMiddleware, userRouter);

export default router;