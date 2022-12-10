import * as Bcrypt from 'bcrypt';

export function hash(plain_text: string): string {
  return Bcrypt.hashSync(plain_text, process.env.HASH_SALT);
}

export function compare(plain_text: string, hashed_text: string): boolean {
  return Bcrypt.compareSync(plain_text, hashed_text);
}
