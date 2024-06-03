import { Router } from 'express';
import { getLatestSymbolValue } from '../controllers/symbols/controller';

const router = Router();

router.get('/symbol-value/:symbol', getLatestSymbolValue);

export default router;