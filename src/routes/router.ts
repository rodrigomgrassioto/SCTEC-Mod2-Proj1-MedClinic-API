import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const router = Router();

const authController = new AuthController();


// Rota pública: Registro de usuário
router.post('/auth/register', authController.register);

// Rota pública: Login
router.post('/auth/login', authController.login);

// Rota protegida: Informações do usuário autenticado
router.get('/users/me', authMiddleware, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

// Rota protegida por perfil: Ping para administradores
router.get(
  '/admin/ping',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  (req, res) => {
    res.status(200).json({ message: "Pong! Acesso administrativo confirmado." });
  }
);

export default router;