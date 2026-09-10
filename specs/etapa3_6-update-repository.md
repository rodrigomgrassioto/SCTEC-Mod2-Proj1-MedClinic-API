# MedClinic API - Etapa 3.2: Atualização do UserRepository (Adicionar método Save)

## Objetivo
Refatorar exclusivamente o arquivo `src/repositories/UserRepository.ts` para incluir o método de salvamento (`save`) nativo do TypeORM 1.1.1, que ficou faltando na execução anterior.

## Contexto Tecnológico
- **ORM:** TypeORM 1.1.1 (Acessando os dados através de `AppDataSource.getRepository(User)`).
- **Linguagem:** TypeScript 6 com tipagem estrita (Proibido usar 'any' para retornos e entidades).

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior (Código simples, funcional e linear).

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Use recuo de 2 espaços e quebras de linha para leitura humana. Proibido linha única.
2. **Métodos Obrigatórios:** O objeto `UserRepository` exportado DEVE conter exatamente dois métodos funcionais: `findByEmail` (já existente) e `save` (novo).
3. **Tipagem do Método Save:** O método `save` deve receber um objeto com os dados do usuário e retornar uma `Promise<User>` contendo a entidade salva com seu ID gerado pelo banco.

## Código Esperado para Substituição Completa:
```typescript
import { AppDataSource } from '../database/data-source';
import { User } from '../entities/User';

// Obtém o repositório padrão do TypeORM para a entidade User
const baseRepository = AppDataSource.getRepository(User);

/**
 * Repositório customizado e estendido para a entidade User
 */
export const UserRepository = {
  /**
   * Busca um usuário pelo e-mail
   * @param email - E-mail do usuário
   */
  async findByEmail(email: string): Promise<User | null> {
    return await baseRepository.findOne({ where: { email } });
  },

  /**
   * Salva ou atualiza um usuário no banco de dados
   * @param user - Objeto com os dados do usuário (Partial<User> ou dados de cadastro)
   */
  async save(user: Partial<User>): Promise<User> {
    return await baseRepository.save(user);
  }
};
```

## Instrução de Saída
Reescreva completamente o arquivo `src/repositories/UserRepository.ts` utilizando o código estruturado acima. Não crie outros arquivos ou pastas nesta etapa.
