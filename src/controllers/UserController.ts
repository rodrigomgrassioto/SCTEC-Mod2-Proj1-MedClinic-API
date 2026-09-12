import { Request, Response } from 'express';

export class UserController {
    me(req: Request, res: Response): void {
        const tst = req
        const ps = "passou";
        res.status(200).json({
            success: true,
            user: req.user
        });
    }

    adminPing(req: Request, res: Response): void {
        res.status(200).json({
            message: 'Pong! Acesso administrativo confirmado.'
        });
    }
}