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