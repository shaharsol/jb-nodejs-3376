import { Router } from 'express';
import { getUnqiueSymbols } from '../controllers/api/controller';

const router = Router();

router.get('/symbols', getUnqiueSymbols)

export default router;