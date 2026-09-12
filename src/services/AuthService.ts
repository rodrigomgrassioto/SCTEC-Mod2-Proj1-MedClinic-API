import { UserRepository } from '../repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/crypto';
import { generateToken } from '../utils/jwt';
import { RegisterUserDTO } from '../dtos/auth/RegisterUserDTO'
import { LoginDTO } from '../dtos/auth/LoginDTO'
import { UserResponseDTO } from '../dtos/auth/UserResponseDTO'

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
  public async register(data: RegisterUserDTO): Promise<UserResponseDTO>
  {
    // Validação de campos obrigatórios
    if (!data.name || !data.email || !data.password) {
      throw new Error('Campos nome, e-mail e senha são obrigatórios');
    }

    const emailLower = this.normalizeEmail(data.email);

    // Verificação do formato do e-mail (Regex simples)
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailRegex.test(emailLower)) {
      throw new Error('Formato de e-mail inválido');
    }

    // Verifica se o e-mail já está cadastrado
    const userExists = await UserRepository.findByEmail(emailLower);
    if (userExists) {
      throw new Error('E-mail já cadastrado');
    }

    // Gera hash da senha
    const hashedPassword = await hashPassword(data.password);

    // Cria usuário com o hash da senha
    const newUser = {
      name: data.name,
      email: emailLower,
      password: hashedPassword,
      role: data.role || 'ATTENDANT'
    };

    // Salva no banco de dados
    const savedUser = await UserRepository.save(newUser);


    // Retorna os dados do usuário (sem a senha)
    return {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
      role: savedUser.role
    };
  }

  /**
   * Autentica um usuário existente
   * @param data - Dados de login (email, password)
   * @returns Objeto com token e dados do usuário autenticado
   * @throws Erro se credenciais inválidas
   */
  public async login(data: LoginDTO): Promise<{ user: UserResponseDTO, token: string }>
  {
    const emailLower = this.normalizeEmail(data.email)

    // Busca usuário pelo e-mail
    const user = await UserRepository.findByEmail(emailLower);
    
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

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase()
  }
}