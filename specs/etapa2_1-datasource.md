# MedClinic API - Etapa 2.1: Configuração do DataSource (Banco de Dados)

## Objetivo
Criar exclusivamente o arquivo de configuração de conexão do TypeORM 1.1.1 com o PostgreSQL, preparado para o ambiente de desenvolvimento e execução de Migrations.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código funcional, simples e muito bem comentado linha por linha de forma didática.

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Use obrigatoriamente recuo de 2 espaços e quebras de linha corretas. Proibido gerar código em linha única.
2. **Tratamento de Variáveis (Validação):** Converta a porta do banco para número garantindo um valor padrão de segurança caso a variável falhe (ex: `Number(process.env.DB_PORT || 5432)`). Faça o mesmo para o host (ex: `process.env.DB_HOST || 'localhost'`).
3. **Padrão de Caminhos Universais:** Na propriedade `entities` e `migrations`, adicione suporte tanto para o ambiente de desenvolvimento (`.ts`) quanto para o ambiente compilado de produção (`.js`).
4. **Configuração de Segurança:** O campo `synchronize` DEVE ser `false`. Adicione um comentário no código explicando que se fosse `true`, o TypeORM mudaria as tabelas automaticamente e poderia apagar dados de produção, por isso usamos Migrations.

## Estrutura Esperada do Código (Esqueleto)
O agente deve seguir exatamente esta estrutura de importação e exportação do TypeORM 1.x:
```typescript
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false, // Desativado para usar migrations com segurança
  logging: true,      // Exibe as queries SQL no terminal para ajudar o dev júnior
  entities: ["src/entities/*.ts", "dist/entities/*.js"],
  migrations: ["src/database/migrations/*.ts", "dist/database/migrations/*.js"]
});
```

## Instrução de Saída
Gere apenas o arquivo `src/database/data-source.ts` preenchido com as variáveis do processo e os comentários didáticos solicitados. Não gere outros arquivos nesta etapa.
