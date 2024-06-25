import { Router, urlencoded } from "express";
import { welcome } from "../controllers/guests/controller";
import enforceGuest from "../middlewares/enforce-guest";

const router = Router()

router.use(enforceGuest)

router.get('/welcome', welcome)

export default router;