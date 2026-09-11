import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';
import { RegisterUserDTO } from '../dtos/auth/RegisterUserDTO'
import { LoginDTO } from '../dtos/auth/LoginDTO'

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: RegisterUserDTO = req.body

      const user = await authService.register(data);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // const { email, password } = req.body;
      const data: LoginDTO = req.body

      const { token, user } = await authService.login(data);
      res.status(200).json({ success: true, token, user });
    } catch (error) {
      next(error);
    }
  }
}