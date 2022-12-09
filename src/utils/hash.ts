import * as Bcrypt from 'bcrypt';

export function hash(plain_text: string): string {
  return Bcrypt.hashSync(plain_text, parseInt(process.env.HASH_ROUNDS));
}

export function compare(plain_text: string, hashed_text: string): boolean {
  return Bcrypt.compareSync(plain_text, hashed_text);
}
