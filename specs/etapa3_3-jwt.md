# MedClinic API - Etapa 3.3: Utilitário de Autenticação (JWT)

## Objetivo
Criar exclusivamente o arquivo auxiliar de segurança para gerar e validar tokens de acesso em `src/utils/jwt.ts`.

## Contexto Tecnológico
- **Ambiente:** Node 24 + TypeScript 6 + ES2022.
- **Segurança:** Emissão e validação de tokens com `jsonwebtoken` (versão 9.0.3) e tipos `@types/jsonwebtoken`.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código simples, funcional, totalmente tipado e documentado.

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Use obrigatoriamente recuo de 2 espaços e quebras de linha corretas. Proibido gerar código em linha única.
2. **Contrato do Payload:** A função de gerar token deve receber um objeto tipado com `{ id: string; role: string }`.
3. **Mapeamento do Payload:** Dentro do token gerado (no método `jwt.sign`), a propriedade `id` informada DEVE ser mapeada obrigatoriamente na chave padrão de identificação `sub` (subject), junto com a propriedade `role`.
4. **Variáveis de Ambiente:** Busque as configurações sensíveis de assinatura (`process.env.JWT_SECRET`) e tempo de expiração (`process.env.JWT_EXPIRES_IN`) diretamente das variáveis globais do sistema.

## Arquivo a ser criado nesta etapa:
### `src/utils/jwt.ts`
Deve exportar exatamente duas funções:
- `generateToken(payload: { id: string; role: string }): string` -> Cria o token assinado usando `jwt.sign`.
- `verifyToken(token: string): any` -> Valida e decodifica o token recebido através de `jwt.verify`.

## Instrução de Saída
Gere exclusivamente o código para o arquivo `src/utils/jwt.ts`. Não crie nenhum outro arquivo, serviço ou rota nesta etapa.
