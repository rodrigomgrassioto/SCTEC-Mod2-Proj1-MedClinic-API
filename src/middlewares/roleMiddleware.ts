import { Request, Response, NextFunction } from 'express';

export const roleMiddleware = (allowedRoles: string[]): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: "Usuário não autenticado" });
      return
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ error: "Acesso negado: privilégios insuficientes" });
      return
    }

    next();
  };
};