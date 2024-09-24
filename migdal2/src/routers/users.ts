import { Router, Request, Response, urlencoded } from "express";
import { addSymbol, dashboard } from "../controllers/users/users";
import validation from "../middlewares/validation";
import { addSymbolValidator } from "../controllers/users/validator";

const router = Router()

router.use(urlencoded({ extended: false }))

router.get('/dashboard', dashboard)
router.post('/symbols', validation(addSymbolValidator) , addSymbol)

export default router
