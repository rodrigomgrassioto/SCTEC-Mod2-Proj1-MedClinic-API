import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users') // Define o nome da tabela no banco de dados
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // Identificador único gerado automaticamente pelo PostgreSQL

  @Column({ type: 'varchar' })
  name!: string; // Nome completo do usuário

  @Column({ type: 'varchar', unique: true })
  email!: string; // Endereço de e-mail único para autenticação

  @Column({ type: 'varchar' })
  password!: string; // Guardará o hash da senha gerado pelo bcrypt posteriormente

  @Column({ type: 'varchar', default: 'ATTENDNT' })
  role!: string; // Valores esperados: 'ADMIN' ou 'ATTENDANT' (padrão é 'ATTENDANT')

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date; // Timestamp automático para registro de criação
}