import express, { Router } from 'express';
import { addSymbol, dashboard, logout } from '../controllers/users/controller';
import validate from '../middlewares/validation';
import { addSymbolValidator } from '../controllers/users/validator';
import enforceAuth from '../middlewares/enforce-guest';


const router = Router();

router.use(enforceAuth);

router.get('/dashboard', dashboard);
router.post('/symbols/add', express.urlencoded({ extended: false }), validate(addSymbolValidator), addSymbol);
router.get('/logout', logout)

export default router;