import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';
import {UserController} from "../controllers/UserController";

const router = Router();

const authController = new AuthController();
const userController = new UserController();


// Rota pública: Registro de usuário
router.post('/auth/register', authController.register);

// Rota pública: Login
router.post('/auth/login', authController.login);

// Rota protegida: Informações do usuário autenticado
router.get('/users/me', authMiddleware, userController.me);

// Rota protegida por perfil: Ping para administradores
router.get('/admin/ping', authMiddleware, roleMiddleware(['ADMIN']), userController.adminPing);

export default router;