# MedClinic API - Tarefa 4: Middleware de Erro Global

## Objetivo
Criar **apenas** o interceptador universal de erros usando o formato clássico de 4 parâmetros do Express `(err: any, req: Request, res: Response, next: NextFunction)`.

## Arquivo a ser criado:
`src/middlewares/errorMiddleware.ts`

## Regras do Código:
Mapear as mensagens conhecidas para seus respectivos status HTTP:
- "Campos nome, e-mail e senha são obrigatórios" -> `400 Bad Request`
- "Formato de e-mail inválido" -> `400 Bad Request`
- "E-mail ou senha inválidos" -> `401 Unauthorized`
- "Token inválido ou expirado" -> `401 Unauthorized`
- "E-mail já cadastrado" -> `409 Conflict`
- Outros erros inesperados -> `500 Internal Server Error`

Retornar a resposta sempre no formato: `{ "success": false, "message": "..." }`.

## Instrução
Gere única e exclusivamente o arquivo `src/middlewares/errorMiddleware.ts`.
