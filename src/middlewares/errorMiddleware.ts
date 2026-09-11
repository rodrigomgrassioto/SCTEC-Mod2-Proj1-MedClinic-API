import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
): void {
  let status = 500;
  let message = 'Erro interno no servidor';

  // Se err for uma instância da classe Error
  if (err instanceof Error) {
    if (err.message === "Campos nome, e-mail e senha são obrigatórios") {
      status = 400;
      message = err.message;
    } else if (err.message === "Formato de e-mail inválido") {
      status = 400;
      message = err.message;
    } else if (err.message === "E-mail ou senha inválidos") {
      status = 401;
      message = err.message;
    } else if (err.message === "Token inválido ou expirado") {
      status = 401;
      message = err.message;
    } else if (err.message === "E-mail já cadastrado") {
      status = 409;
      message = err.message;
    }
  } else if (typeof err === 'string') {
    // Segurança extra: se alguém der um throw "Mensagem em Texto Puro"
    message = err;
  }

  res.status(status).json({ success: false, message });
}
