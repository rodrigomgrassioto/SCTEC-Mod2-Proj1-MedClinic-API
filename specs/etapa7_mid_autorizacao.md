# MedClinic API - Tarefa 3: Middleware de Autorização (RBAC)

## Objetivo
Criar **apenas** o middleware que verifica se o perfil do usuário logado é permitido para acessar a rota.

## Arquivo a ser criado:
`src/middlewares/roleMiddleware.ts`

## Regras do Código:
1. Criar uma função que recebe um array de strings com as roles permitidas: `roleMiddleware(allowedRoles: string[])`.
2. Validar se `req.user` existe. Se não existir, responder `401 Unauthorized` com `{ "error": "Usuário não autenticado" }`.
3. Verificar se `allowedRoles.includes(req.user.role)`. Se não incluir, responder `403 Forbidden` com `{ "error": "Acesso negado: privilégios insuficientes" }`.
4. Se tiver permissão, chamar `next()`.

## Instrução
Gere única e exclusivamente o arquivo `src/middlewares/roleMiddleware.ts`.
