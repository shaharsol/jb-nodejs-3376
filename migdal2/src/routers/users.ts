import { Router, Request, Response } from "express";

const router = Router()

router.get('/dashboard', (req: Request, res: Response, next) => {
    res.render('users/dashboard')
})

export default router

