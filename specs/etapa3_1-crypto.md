# MedClinic API - Etapa 3.1: Utilitários de Segurança (Criptografia e JWT)

## Objetivo
Criar exclusivamente as funções auxiliares de segurança para gerar o hash de senhas (bcrypt) e manipular os tokens de acesso (jsonwebtoken).

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código limpo, linear, tipado e muito bem comentado linha por linha.

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Use recuo de 2 espaços e quebras de linha corretas. Proibido linha única.
2. **Criptografia Segura:** Utilize o `bcrypt` para gerar o hash com um fator de custo (salts) igual a `10`.
3. **Assinatura do Token:** Ao gerar o JWT, inclua obrigatoriamente no payload o `id` do usuário mapeado na propriedade `sub` e a sua respectiva `role`. Busque a chave secreta e o tempo de expiração diretamente do `process.env`.

## Arquivos a serem criados nesta etapa:

### 1. `src/utils/crypto.ts`
Deve exportar duas funções assíncronas baseadas em Promises:
- `hashPassword(password: string): Promise<string>` -> Gera e retorna o hash da senha.
- `comparePassword(password: string, hash: string): Promise<boolean>` -> Compara a senha em texto puro com o hash do banco.

### 2. `src/utils/jwt.ts`
Deve exportar duas funções:
- `generateToken(payload: { id: string; role: string }): string` -> Cria o token assinando o `sub` e a `role` usando `process.env.JWT_SECRET` e `process.env.JWT_EXPIRES_IN`.
- `verifyToken(token: string): any` -> Valida e decodifica o token recebido.

## Instrução de Saída
Gere apenas o código para os dois arquivos utilitários descritos acima dentro da pasta `src/utils/`. Não crie repositórios ou rotas ainda.
