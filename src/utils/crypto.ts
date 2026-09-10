import * as bcrypt from 'bcrypt';

/**
 * Gera o hash da senha usando bcrypt com fator de custo 10 (salts)
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

/**
 * Compara a senha em texto puro com o hash armazenado no banco
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}