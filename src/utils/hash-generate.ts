import { hash } from "bcryptjs";
export const HASHED = 8;

export async function hashGenerator(password: string): Promise<string> {
  const passwordHashed = await hash(password, HASHED);

  return passwordHashed;
}
