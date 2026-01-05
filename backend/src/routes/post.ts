import { Router } from "express";
import { createPost } from "../controllers/postController";
import { authenticate } from "../middlewares/authenticate";
import { validate } from "../middlewares/validate";
import { createPostSchema } from "../validators/postSchema";

const router = Router();

router.post("/", authenticate, validate(createPostSchema), createPost);

export default router;
