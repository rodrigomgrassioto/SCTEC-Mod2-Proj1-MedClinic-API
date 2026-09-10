# MedClinic API - Etapa 1-1: Setup Inicial do Projeto

## Objetivo
Configurar o ambiente de desenvolvimento utilizando Node.js, TypeScript e as versões validadas do Express e TypeORM, preparando a estrutura de pastas e as variáveis de ambiente.

## Nível do Desenvolvedor (Persona)
- **Perfil:** Desenvolvedor Júnior.
- **Estilo de Código:** Código funcional, simples, direto e muito bem comentado. Escreva de forma didática, respeitando estritamente as tipagens básicas do TypeScript (evite o uso de 'any').

## 🚨 REGRAS DE SINTAXE E FORMATAÇÃO (CRÍTICO)
1. **JSON Válido:** É expressamente proibido o uso de ponto e vírgula (`;`) dentro de arquivos `.json` (como `package.json` e `tsconfig.json`). Use apenas vírgulas (`,`) para separar as propriedades.
2. **Formatação Humana:** Não gere arquivos em uma única linha contínua de texto. Aplique quebras de linha padronizadas e recuo/indentação exata de 2 espaços.
3. **Variáveis não utilizadas:** No TypeScript estrito, variáveis declaradas e não usadas barram a compilação. Em rotas onde o parâmetro de requisição não for usado, utilize o padrão de sublinhado (`_req: express.Request`).

## Lista de Dependências Homologadas e Travadas
O agente DEVE gerar o arquivo utilizando EXATAMENTE estas versões testadas e validadas (sem os símbolos ^ ou ~):

### "dependencies" (Produção):
- `express`: "5.2.1"
- `typeorm`: "1.1.1"
- `pg`: "8.23.0"
- `bcrypt`: "6.0.0"
- `jsonwebtoken`: "9.0.3"

### "devDependencies" (Desenvolvimento e Tipos):
- `typescript`: "6.0.3"
- `tsx`: "4.23.13"
- `@types/bcrypt`: "6.0.0"
- `@types/jsonwebtoken`: "9.0.10"
- `@types/node`: "22.20.2"

## Scripts Obrigatórios do Package.json:
```json
"scripts": {
  "build": "tsc",
  "start": "node --env-file=.env dist/server.js",
  "dev": "tsx watch --env-file=.env src/server.ts",
  "test": "echo \"Error: no test specified\" && exit 1",
  "type-check": "tsc --noEmit"
}
```

## Template Exato para o `tsconfig.json`
O agente DEVE copiar e gerar o arquivo `tsconfig.json` exatamente com este conteúdo estruturado:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## Template Exato para o `src/server.ts`
O agente DEVE gerar o arquivo inicial do servidor utilizando a sintaxe correta do Express 5:
```typescript
import * as express from 'express';

const app = express();
const PORT = process.env.PORT || '3000';

app.use(express.json());

// Rota inicial de teste (usando _req para evitar erro de variável não utilizada)
app.get('/api', (_req: express.Request, res: express.Response) => {
  res.status(200).json({ 
    success: true,
    message: 'API MedClinic funcionando com Express 5!' 
  });
});

app.listen(PORT, () => {
  console.log(`[servidor]: Aplicação rodando na porta ${PORT}`);
});
```

## Regras para o `.env.example`
Crie um arquivo `.env.example` listando estes campos obrigatórios com valores fictícios explicativos:
- `PORT` (ex: 3000)
- `DB_HOST` (ex: localhost)
- `DB_PORT` (ex: 5432)
- `DB_USERNAME` (ex: postgres)
- `DB_PASSWORD` (ex: insira_sua_senha)
- `DB_DATABASE` (ex: medclinic)
- `JWT_SECRET` (ex: coloque_uma_chave_segura)
- `JWT_EXPIRES_IN` (ex: 1h)
