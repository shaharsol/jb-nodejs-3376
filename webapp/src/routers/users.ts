import { Router } from "express";

const router = Router()

router.get('/dashboard', (req, res, next) => {
    res.send('hello from dashboard')
})

export default router;