# MedClinic API - Etapa 4.2: Camada de Controle (AuthController)

## Objetivo
Criar exclusivamente a classe `AuthController` para receber as requisições HTTP de cadastro e login, acionar o `AuthService` e devolver as respostas estruturadas em JSON.

## Contexto Tecnológico (Obrigatório)
- **Ambiente:** Node 24 + TypeScript 6 + Express 5.2.1.
- **Regra do Express 5:** Importe e utilize os tipos `Request` e `Response` diretamente de `'express'`.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código focado em manipulação HTTP. Não coloque regras de negócio ou queries de banco aqui dentro. Toda a lógica deve ser delegada para o `AuthService`.

## 🚨 REGRAS DE CONTROLE CRÍTICAS (RF11, RF12)
1. **Método `register`:**
   - Deve extrair `name`, `email`, `password`, `role` do `req.body`.
   - Deve abrir um bloco `try/catch`. Dentro do `try`, chama o `authService.register()`. Se der certo, retorna `res.status(201).json({ success: true, data: user })`.
   - Dentro do `catch`, capture o erro e passe para a próxima camada usando `next(error)` (preparando para o middleware global de erros da próxima etapa).
2. **Método `login`:**
   - Deve extrair `email` e `password` do `req.body`.
   - No bloco `try`, chama o `authService.login()`. Se der certo, retorna `res.status(200).json({ success: true, token, user })`.
   - No bloco `catch`, capture o erro e passe adiante usando `next(error)`.

## Estrutura Esperada do Código (Esqueleto)
```typescript
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Coleta dados do body, chama o service e responde 201...
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Coleta dados do body, chama o service e responde 200...
    } catch (error) {
      next(error);
    }
  }
}
```

## Instrução de Saída
Gere apenas o arquivo `src/controllers/AuthController.ts` preenchido conforme as especificações. Garanta o uso correto do `next(error)` em todos os blocos `catch` para não interromper a aplicação.
