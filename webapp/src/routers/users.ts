import { Router, urlencoded } from "express";
import { addSymbol, dashboard } from "../controllers/users/controller";

const router = Router()

router.use(urlencoded({extended: false}))

router.get('/dashboard', dashboard)
router.post('/symbols', addSymbol)

export default router;