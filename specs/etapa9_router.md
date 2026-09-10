# MedClinic API - Tarefa 5: Arquivo de Rotas Centralizado (Router)

## Objetivo
Criar **apenas um único arquivo** de rotas centralizado que unifica todos os endpoints da aplicação (públicos e protegidos), aplicando os devidos middlewares.

## Arquivo a ser criado:
`src/routes/router.ts`

## Endpoints a Mapear:
1. `POST /auth/register` -> Rota Pública. Direciona para `authController.register`.
2. `POST /auth/login` -> Rota Pública. Direciona para `authController.login`.
3. `GET /users/me` -> Rota Protegida. Deve aplicar apenas o `authMiddleware`. Deve responder com status `200` e retornar em formato JSON o conteúdo que estiver armazenado em `req.user`.
4. `GET /admin/ping` -> Rota Protegida por Perfil. Deve aplicar o `authMiddleware` e, em seguida, o `roleMiddleware(['ADMIN'])`. Deve responder com status `200` e retornar o JSON `{ "message": "Pong! Acesso administrativo confirmado." }`.

## Regras de Implementação (Estilo Júnior)
- Instancie o roteador usando `const router = Router();`.
- Importe o `AuthController` e os middlewares criados anteriormente (`authMiddleware` e `roleMiddleware`).
- Lembre-se de instanciar a classe do controller antes de usar nas rotas (Ex: `const authController = new AuthController();`).
- Exporte o roteador no final usando exportação padrão (`export default router;`).

## Instrução
Gere única e exclusivamente o arquivo `src/routes/router.ts`. Não crie nenhum outro arquivo.
