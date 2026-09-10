import * as jwt from 'jsonwebtoken';

/**
 * Gera um token JWT assinado com as configurações do ambiente
 * @param payload - Objeto contendo identificador e perfil do usuário
 * @returns String com o token gerado
 */
export function generateToken(payload: { id: string; role: string }): string {
  // Garantimos que se a variável não estiver no .env, usará '1h' como padrão de segurança
  const expiresInValue = process.env.JWT_EXPIRES_IN || '1h';
  return jwt.sign(
    {
      sub: payload.id,   // Mapeia o ID para a chave padrão 'sub'
      role: payload.role // Inclui o perfil do usuário no token
    },
    process.env.JWT_SECRET!, // Usa a chave secreta definida no ambiente
    {
      expiresIn: expiresInValue as jwt.SignOptions['expiresIn'] // Força a tipagem aceita pelo pacote
    }
  );
}

/**
 * Valida e decodifica um token JWT recebido
 * @param token - String com o token a ser verificado
 * @returns Objeto decodificado do token
 * @throws Erro se o token for inválido ou expirado
 */
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
}