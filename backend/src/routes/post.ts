import { Router } from "express";
import { createPost } from "../controllers/postController";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.post("/", authenticate, createPost);

export default router;
