import express, { Router } from 'express';
import { addSymbol, dashboard } from '../controllers/users/controller';
import validate from '../middlewares/validation';
import { addSymbolValidator } from '../controllers/users/validator';


const router = Router();

router.get('/dashboard', dashboard);
router.post('/symbols/add', express.urlencoded({ extended: false }), validate(addSymbolValidator), addSymbol);

export default router;