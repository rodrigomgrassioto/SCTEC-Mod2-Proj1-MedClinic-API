# MedClinic API

![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24.18.0-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-18.4-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-1.1.1-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-9.0.3-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-6.0.0-003B57?style=for-the-badge)

API REST desenvolvida em **Node.js + TypeScript + Express**, utilizando **PostgreSQL + TypeORM**, com foco nesta etapa em **autenticação e autorização de usuários**.

O projeto faz parte do **Mini-Projeto Avaliativo — Módulo 02 / Back End Node**, seguindo a arquitetura em camadas solicitada para a evolução futura da aplicação MedClinic.

Vídeo de apresentação do projeto: https://youtu.be/nGtsBWe2urA
Repositório inicial: Arquivos = https://github.com/rodrigomgrassioto/CR_SCTEC/tree/feat/001Iniciarojeto01Mod02/1-Carreira%20Tech%20-%20Trilha%20Desenvolvimento%20de%20Software/1-Back-end%20JavaScript%2C%20TypeScript%20e%20PostgreSQL/Projetos/3-Modulo2Projeto1-MedClinic_API
Repositório inicial: Commits: https://github.com/rodrigomgrassioto/CR_SCTEC/compare/main...feat/001Iniciarojeto01Mod02
---

## 📌 Escopo desta etapa

Nesta etapa foram implementados os recursos necessários para a base de autenticação e autorização da API:

- Cadastro de usuários
- Validação de campos obrigatórios
- Validação do formato do e-mail
- Normalização do e-mail
- Verificação de e-mail duplicado
- Hash de senha com bcrypt
- Login com autenticação por e-mail e senha
- Emissão de token JWT
- Expiração configurável do JWT
- Middleware de autenticação
- Controle de acesso por perfil (RBAC)
- Perfis `ADMIN` e `ATTENDANT`
- Endpoint de identificação do usuário autenticado
- Endpoint protegido exclusivo para administrador
- Tratamento centralizado de erros
- Persistência com PostgreSQL e TypeORM
- Migration para criação da tabela de usuários

As funcionalidades de **especialidades, médicos, pacientes e consultas** não fazem parte desta etapa e ficam reservadas para a continuidade do projeto.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão utilizada |
|---|---:|
| Node.js | **24.18.0** |
| TypeScript | **6.0.3** |
| Express | **5.2.1** |
| PostgreSQL | **18.4** |
| TypeORM | **1.1.1** |
| pg | **8.23.0** |
| bcrypt | **6.0.0** |
| jsonwebtoken | **9.0.3** |
| tsx | **4.23.13** |

### Tipagens utilizadas

- `@types/node` 22.20.2
- `@types/express` ^5.0.6
- `@types/bcrypt` 6.0.0
- `@types/jsonwebtoken` 9.0.10

---

## ✅ Requisitos para execução

Antes de executar o projeto, o ambiente deverá possuir:

1. **Node.js 24.18.0** ou uma versão compatível com o projeto.
2. **PostgreSQL 18.4** ou uma versão compatível.
3. **npm**, instalado junto com o Node.js.
4. Um banco de dados PostgreSQL criado para a aplicação.
5. Permissão de acesso ao banco para o usuário configurado no `.env`.
6. A extensão PostgreSQL necessária para a função `uuid_generate_v4()`, caso a migration atual seja executada dessa forma.

> A aplicação utiliza migration do TypeORM para criação da estrutura do banco. O `synchronize` do TypeORM permanece desativado.

---

## 📁 Estrutura do projeto

```text
src/
├── controllers/
│   ├── AuthController.ts
│   └── UserController.ts
├── database/
│   ├── data-source.ts
│   └── migrations/
│       └── 1789221799802-CreateUserTable.ts
├── dtos/
│   └── auth/
│       ├── LoginDTO.ts
│       ├── RegisterUserDTO.ts
│       └── UserResponseDTO.ts
├── entities/
│   └── User.ts
├── middlewares/
│   ├── authMiddleware.ts
│   ├── errorMiddleware.ts
│   └── roleMiddleware.ts
├── repositories/
│   └── UserRepository.ts
├── routes/
│   └── router.ts
├── services/
│   └── AuthService.ts
├── types/
│   └── express.d.ts
├── utils/
│   ├── crypto.ts
│   └── jwt.ts
└── server.ts
```

### Responsabilidade das camadas

- **Routes:** definição das rotas e associação dos middlewares/controllers.
- **Middlewares:** autenticação, autorização por perfil e tratamento centralizado de erros.
- **Controllers:** tratamento da requisição/resposta HTTP.
- **Services:** regras de negócio relacionadas à autenticação.
- **Repositories:** acesso aos dados dos usuários.
- **Entities:** representação das entidades persistidas pelo TypeORM.
- **Database:** configuração da conexão e migrations.
- **DTOs:** definição dos formatos de entrada e saída.
- **Utils:** funções auxiliares para criptografia e JWT.

---

## ⚙️ Configuração do ambiente

Crie o arquivo `.env` na raiz do projeto com base no `.env.example`.

Exemplo:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=medclinic
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1h
```

### Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `PORT` | Porta utilizada pela API. |
| `DB_HOST` | Host do PostgreSQL. |
| `DB_PORT` | Porta do PostgreSQL. |
| `DB_USERNAME` | Usuário de acesso ao banco. |
| `DB_PASSWORD` | Senha de acesso ao banco. |
| `DB_DATABASE` | Nome do banco da aplicação. |
| `JWT_SECRET` | Chave utilizada para assinar e validar os tokens JWT. |
| `JWT_EXPIRES_IN` | Tempo de expiração do token JWT. |

> O arquivo `.env` não deve ser versionado. Utilize o `.env.example` como modelo.

---

## 🗄️ Banco de dados

Crie previamente o banco de dados `medclinic` no PostgreSQL, ou utilize outro nome e ajuste a variável `DB_DATABASE`.

Exemplo no PostgreSQL:

```sql
CREATE DATABASE medclinic;
```

Depois configure as credenciais no `.env`.

### UUID e migration

A migration de criação da tabela de usuários utiliza a função PostgreSQL `uuid_generate_v4()` para geração dos identificadores UUID.

Por isso, o banco utilizado para executar a migration deve disponibilizar a extensão PostgreSQL responsável por essa função.

Caso necessário, habilite a extensão no banco:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

> Dependendo do provedor PostgreSQL utilizado, a habilitação de extensões pode depender das permissões oferecidas pelo serviço.

---

## 🚀 Instalação

Clone o projeto e acesse a pasta:

```bash
git clone https://github.com/rodrigomgrassioto/SCTEC-Mod2-Proj1-MedClinic-API.git
cd SCTEC-Mod2-Proj1-MedClinic-API-main
```

Instale as dependências:

```bash
npm install
```

Crie o `.env` a partir do `.env.example` e configure as informações do PostgreSQL e do JWT.

---

## ▶️ Execução em desenvolvimento

Para executar a API em modo de desenvolvimento:

```bash
npm run dev
```

A aplicação será iniciada utilizando `tsx` e o arquivo `src/server.ts`.

Por padrão:

```text
http://localhost:3000
```

---

## 🏗️ Build e execução em produção

Gere os arquivos compilados:

```bash
npm run build
```

Depois execute:

```bash
npm start
```

O build é gerado na pasta `dist/` e a aplicação é iniciada pelo arquivo compilado `dist/server.js`.

---

## 🔄 Migrations

### Executar migrations

```bash
npm run migration:run
```

### Reverter a última migration

```bash
npm run migration:revert
```

### Gerar uma nova migration

```bash
npm run migration:generate
```

> O projeto utiliza `synchronize: false`, portanto a estrutura do banco é controlada por migrations do TypeORM.

---

## 🔐 Autenticação e autorização

A autenticação utiliza **JWT (JSON Web Token)**.

O token emitido no login contém, no mínimo:

- identificador do usuário (`sub`)
- perfil do usuário (`role`)
- tempo de expiração (`exp`)

Os endpoints protegidos esperam o token no header HTTP:

```http
Authorization: Bearer SEU_TOKEN
```

### Perfis disponíveis

| Perfil | Descrição |
|---|---|
| `ADMIN` | Perfil administrativo com acesso aos endpoints protegidos por administrador. |
| `ATTENDANT` | Perfil operacional com permissões restritas. |

---

## 📡 Endpoints

### Cadastro de usuário

**POST** `/api/auth/register`

Cria um novo usuário.

Exemplo de requisição:

```json
{
  "name": "João da Silva",
  "email": "joao@example.com",
  "password": "123456",
  "role": "ATTENDANT"
}
```

Resposta de sucesso:

```json
{
  "success": true,
  "data": {
    "id": "uuid-do-usuario",
    "name": "João da Silva",
    "email": "joao@example.com",
    "role": "ATTENDANT"
  }
}
```

A senha nunca é retornada em texto puro.

Possíveis situações tratadas:

- campos obrigatórios ausentes → `400`
- e-mail inválido → `400`
- e-mail já cadastrado → `409`

---

### Login

**POST** `/api/auth/login`

Autentica o usuário e retorna um token JWT.

Exemplo:

```json
{
  "email": "joao@example.com",
  "password": "123456"
}
```

Resposta de sucesso:

```json
{
  "success": true,
  "token": "SEU_TOKEN_JWT",
  "user": {
    "id": "uuid-do-usuario",
    "name": "João da Silva",
    "email": "joao@example.com",
    "role": "ATTENDANT"
  }
}
```

Credenciais inválidas retornam `401` com mensagem genérica.

---

### Usuário autenticado

**GET** `/api/users/me`

Endpoint protegido pelo middleware de autenticação.

Header:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

Retorna os dados de identificação/autorização disponíveis no token do usuário autenticado.

Exemplo:

```json
{
  "success": true,
  "user": {
    "id": "uuid-do-usuario",
    "role": "ATTENDANT"
  }
}
```

---

### Verificação de acesso administrativo

**GET** `/api/admin/ping`

Endpoint protegido por autenticação e pelo perfil `ADMIN`.

Header:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

Resposta de sucesso:

```json
{
  "message": "Pong! Acesso administrativo confirmado."
}
```

Um usuário `ATTENDANT` autenticado não possui permissão e recebe `403`.

---

## 🛡️ Tratamento de erros

A API possui middleware centralizado para tratamento de erros e padronização das respostas.

Entre os principais casos tratados estão:

| Situação | HTTP |
|---|---:|
| Dados inválidos / campos obrigatórios | `400` |
| Token ausente, inválido ou expirado | `401` |
| Usuário autenticado sem permissão | `403` |
| E-mail já cadastrado | `409` |

As operações críticas de autenticação e acesso ao banco utilizam tratamento de exceções com `try/catch` e operações assíncronas com `async/await`.

---

## 🔒 Segurança

O projeto adota as seguintes medidas nesta etapa:

- Senhas armazenadas somente como hash utilizando `bcrypt`.
- Senhas nunca retornadas nas respostas da API.
- JWT com tempo de expiração configurável.
- Chave secreta do JWT armazenada em variável de ambiente.
- Credenciais do PostgreSQL armazenadas em variáveis de ambiente.
- Validação de token em rotas protegidas.
- Controle de acesso por perfil através de RBAC.

---

## 🧪 Scripts disponíveis

| Script | Função |
|---|---|
| `npm run dev` | Executa a API em desenvolvimento. |
| `npm run build` | Compila o projeto TypeScript. |
| `npm start` | Executa a versão compilada. |
| `npm run type-check` | Verifica a tipagem TypeScript sem gerar arquivos. |
| `npm run migration:generate` | Gera uma nova migration do TypeORM. |
| `npm run migration:run` | Executa as migrations pendentes. |
| `npm run migration:revert` | Reverte a última migration. |

---

## 📚 Arquitetura

O projeto utiliza uma arquitetura MVC organizada em camadas, mantendo as responsabilidades separadas e deixando a base preparada para os próximos módulos da aplicação.

Fluxo simplificado:

```text
Client
  │
  ▼
Routes
  │
  ├── Middlewares
  │      ├── Authentication
  │      └── RBAC
  │
  ▼
Controllers
  │
  ▼
Services
  │
  ▼
Repositories
  │
  ▼
TypeORM
  │
  ▼
PostgreSQL
```

---

## 📦 Entidade User

A entidade `User` possui os principais atributos necessários para autenticação e autorização:

- `id` — UUID único
- `name` — nome do usuário
- `email` — e-mail único
- `password` — senha armazenada como hash
- `role` — perfil de acesso
- `createdAt` — data de criação

---

## 📝 Observações

- O projeto nesta etapa é focado exclusivamente em **autenticação e autorização**.
- O banco deve ser configurado antes da execução das migrations.
- O arquivo `.env` deve ser criado localmente e não deve ser versionado.
- Para ambientes PostgreSQL nos quais `uuid_generate_v4()` ainda não esteja disponível, a extensão `uuid-ossp` deverá estar habilitada antes da execução da migration.
- A porta da aplicação pode ser alterada pela variável `PORT`.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.
