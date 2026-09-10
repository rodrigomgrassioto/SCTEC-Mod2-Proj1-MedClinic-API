import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: "Token de autenticação não fornecido ou inválido" });
      return;
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const decoded = verifyToken(token);
      req.user = { id: decoded.sub, role: decoded.role };
      next();
    } catch (error) {
      res.status(401).json({ error: "Token inválido ou expirado" });
      return
    }
  } catch (error) {
    res.status(500).json({ error: "Erro interno no servidor" });
    return
  }
}