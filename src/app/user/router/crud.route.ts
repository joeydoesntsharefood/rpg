import { Router } from "express";
import controller from "../controller/crud.controller";

const path = "/user";

const router = Router();

router.post(path, controller.create);

export default router;