# MedClinic API - Tarefa 2: Middleware de Autenticação (JWT)

## Objetivo
Criar **apenas** o middleware que intercepta as rotas e valida o token JWT usando a função `verifyToken`.

## Contexto
A função `verifyToken(token)` já existe em `src/utils/jwt.ts` e retorna o payload decodificado. O token armazena o ID do usuário na chave `sub` e o perfil na chave `role`.

## Arquivo a ser criado:
`src/middlewares/authMiddleware.ts`

## Regras do Código:
1. Buscar o header `Authorization`. Se não começar com 'Bearer ', retornar `401 Unauthorized` com `{ "error": "Token de autenticação não fornecido ou inválido" }`.
2. Chamar a função `verifyToken(token)`.
3. Se o token for válido, injetar os dados no Express mapeando `sub` para `id`:
   req.user = { id: decoded.sub, role: decoded.role };
4. Chamar `next()`.
5. Se falhar, capturar no `catch` e responder `401 Unauthorized` com o erro correspondente.

## Instrução
Gere única e exclusivamente o arquivo `src/middlewares/authMiddleware.ts`.
