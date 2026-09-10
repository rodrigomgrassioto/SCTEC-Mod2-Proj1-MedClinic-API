# MedClinic API - Etapa 3.2: Camada de Persistência (User Repository)

## Objetivo
Criar exclusivamente o repositório customizado para a entidade `User` utilizando a instância do `AppDataSource` do TypeORM 1.1.1.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código funcional focado em queries simples do banco.

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Respeite o recuo de 2 espaços.
2. **Não usar Any:** Garanta que os parâmetros de busca e os retornos de métodos como Promises estejam explicitamente tipados com a classe `User`.

## Arquivo a serem criados:
### `src/repositories/UserRepository.ts`
Deve exportar a constante `UserRepository` obtida a partir do método `.getRepository(User)` do seu `AppDataSource`. Adicione ou estenda métodos específicos de busca se necessário, como:
- `findByEmail(email: string): Promise<User | null>` -> Busca um usuário no banco através do e-mail.

## Instrução de Saída
Gere o código funcional para o arquivo `src/repositories/UserRepository.ts`. Certifique-se de importar corretamente o `AppDataSource` de `../database/data-source` e a entidade `User` de `../entities/User`.
