import { Router, urlencoded } from "express";
import { welcome } from "../controllers/guests/controller";

const router = Router()

router.get('/welcome', welcome)

export default router;