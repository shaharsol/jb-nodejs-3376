import { Router, urlencoded } from "express";
import { addSymbol, dashboard } from "../controllers/users/controller";
import validation from "../middlewares/validation";
import { addSymbolValidator } from "../controllers/users/validator";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router()

router.use(enforceAuth)
router.use(urlencoded({extended: false}))

router.get('/dashboard', dashboard)
router.post('/symbols', validation(addSymbolValidator), addSymbol)

export default router;