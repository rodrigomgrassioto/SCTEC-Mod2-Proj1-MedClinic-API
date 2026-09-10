import { UserRepository } from '../repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/crypto';
import { generateToken } from '../utils/jwt';

/**
 * Classe de serviço para autenticação e cadastro de usuários
 */
export class AuthService {
  /**
   * Registra um novo usuário no sistema
   * @param data - Dados do usuário (name, email, password, role)
   * @returns Objeto com dados do usuário cadastrado
   * @throws Erro se e-mail já existir ou campos obrigatórios faltarem
   */
  async register(data: { name: string; email: string; password: string; role?: string }): Promise<{ id: string; name: string; email: string; role: string }>
  {
    // Validação de campos obrigatórios
    if (!data.name || !data.email || !data.password) {
      throw new Error('Campos nome, e-mail e senha são obrigatórios');
    }

    // Verificação do formato do e-mail (Regex simples)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Formato de e-mail inválido');
    }

    // Verifica se o e-mail já está cadastrado
    const userExists = await UserRepository.findByEmail(data.email);
    if (userExists) {
      throw new Error('E-mail já cadastrado');
    }

    // Gera hash da senha
    const hashedPassword = await hashPassword(data.password);

    // Cria usuário com o hash da senha
    const newUser = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role || 'ATTENDANT'
    };

    // Salva no banco de dados
    const savedUser = await UserRepository.save(newUser);


    // Retorna os dados do usuário (sem a senha)
    return {
      id: savedUser.id,
      name: data.name,
      email: data.email,
      role: data.role || 'ATTENDANT'
    };
  }

  /**
   * Autentica um usuário existente
   * @param data - Dados de login (email, password)
   * @returns Objeto com token e dados do usuário autenticado
   * @throws Erro se credenciais inválidas
   */
  async login(data: { email: string; password: string }): Promise<{ user: { id: string; name: string; email: string; role: string }; token: string }>
  {
    // Busca usuário pelo e-mail
    const user = await UserRepository.findByEmail(data.email);
    
    // Verifica se o usuário existe e compara a senha
    if (!user || !(await comparePassword(data.password, user.password))) {
      throw new Error('E-mail ou senha inválidos');
    }

    // Gera token JWT com id e role do usuário
    const token = generateToken({
      id: user.id,
      role: user.role
    });

    // Retorna os dados do usuário (sem a senha) e o token
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    };
  }
}