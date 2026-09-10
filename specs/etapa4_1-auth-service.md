# MedClinic API - Etapa 4.1: Camada de Negócio (AuthService)

## Objetivo
Criar exclusivamente a classe `AuthService` para gerenciar as regras de negócio de cadastro de usuários e validação de login.

## Contexto Tecnológico (Obrigatório)
- **Ambiente:** Node 24 (Execução nativa de ES Modules/CommonJS via tsx).
- **Linguagem:** TypeScript 6 (Alvo ES2022, uso obrigatório de Async/Await e tipagem estrita).
- **Persistência:** TypeORM 1.1.1 (Utilizando o `UserRepository` criado na etapa anterior).
- **Segurança:** Criptografia com `bcrypt` e emissão de tokens com `jsonwebtoken`.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código limpo, linear, sem injeção de dependência complexa (instancie ou importe as dependências diretamente) e com comentários didáticos.

## 🚨 REGRAS DE NEGÓCIO CRÍTICAS (RF05, RF06, RF07)
1. **Cadastro (register):**
    - Deve receber: `name`, `email`, `password`, `role`.
    - Deve validar se todos os campos obrigatórios foram enviados.
    - Deve checar se o formato do e-mail é válido (use uma Regex simples).
    - Deve verificar no banco de dados se o e-mail já existe através do `UserRepository.findByEmail()`. Se já existir, deve lançar um erro com a mensagem `"E-mail já cadastrado."`.
    - Deve gerar o hash da senha usando `hashPassword` do utilitário de segurança.
    - Deve salvar o usuário no banco usando `UserRepository.save()`.
    - **Importante:** Nunca retorne o campo `password` (ou seu hash) no objeto final de resposta.
2. **Login (login):**
    - Deve receber: `email`, `password`.
    - Deve buscar o usuário pelo e-mail. Se não encontrar OU se a senha criptografada não bater (usando `comparePassword`), deve lançar um erro genérico com a mensagem `"E-mail ou senha inválidos."` (Proibido dizer qual dos dois campos estava errado por segurança).
    - Se as credenciais forem válidas, deve gerar um token JWT contendo o `id` (no campo `sub`) e a `role` do usuário, retornando o token e os dados básicos do usuário (id, name, email, role).

## Estrutura Esperada do Código (Esqueleto)
```typescript
import { UserRepository } from '../repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/crypto';
import { generateToken } from '../utils/jwt';

export class AuthService {
  async register(data: any): Promise<any> {
    // Implementar regras de validação, hash e persistência aqui...
  }

  async login(data: any): Promise<any> {
    // Implementar busca, comparação de hash e geração de JWT aqui...
  }
}
```

## Instrução de Saída
Gere apenas o arquivo `src/services/AuthService.ts` preenchido com as regras e comentários solicitados. Não crie controladores ou rotas ainda.
