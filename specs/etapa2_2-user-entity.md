# MedClinic API - Etapa 2.2: Criar Entidade User

## Objetivo
Criar exclusivamente a classe da entidade User utilizando os decorators nativos do TypeORM 1.1.1.

## Persona do Agente
- **Perfil:** Desenvolvedor Júnior.
- **Estilo:** Código simples, totalmente tipado (proibido o uso de 'any') e com comentários didáticos explicando o que cada decorator faz na tabela do banco de dados.

## 🚨 REGRAS CRÍTICAS DE IMPLEMENTAÇÃO
1. **Formatação:** Código perfeitamente indentado com recuo de 2 espaços e quebras de linha para leitura humana. Proibido linha única.
2. **IDs Seguros:** O identificador primário deve ser uma string do tipo UUID gerada de forma automática pelo banco de dados.
3. **Restrição de Perfis (Role):** O campo `role` deve ser uma string comum (`varchar`), mas com o valor padrão inicial configurado como `'ATTENDANT'`. Os valores aceitos pela regra de negócio serão 'ADMIN' ou 'ATTENDANT'.

## Estrutura Esperada do Código (Esqueleto)
O agente deve seguir exatamente esta estrutura de decorators e propriedades para construir a entidade:
```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users') // Define o nome da tabela no banco de dados
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string; // Guardará o hash da senha gerado pelo bcrypt posteriormente

  @Column({ type: 'varchar', default: 'ATTENDANT' })
  role!: string; // Valores esperados: 'ADMIN' ou 'ATTENDANT'

  @CreateDateColumn()
  createdAt!: Date;
}
```

## Instrução de Saída
Gere apenas o arquivo `src/entities/User.ts` preenchido com as propriedades e os comentários didáticos solicitados. Não gere outros arquivos e não crie lógicas adicionais nesta etapa.
