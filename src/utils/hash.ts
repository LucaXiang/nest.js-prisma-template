import * as Bcrypt from 'bcrypt';

export function hash(plain_text: string): string {
  const salt = Bcrypt.genSaltSync(parseInt(process.env.HASH_ROUNDS));
  return Bcrypt.hashSync(plain_text, salt);
}

export function compare(plain_text: string, hashed_text: string): boolean {
  return Bcrypt.compareSync(plain_text, hashed_text);
}
