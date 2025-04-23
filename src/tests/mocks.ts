import { vi } from "vitest";

// Mock da função hashGenerator para simular o hash de senhas
export const hashGeneratorMock = vi
  .fn()
  .mockImplementation(async (password: string) => {
    // Implementação simples para testes que apenas adiciona um prefixo
    return `hashed_${password}`;
  });

// Mock da função comparePassword
export const comparePassword = vi
  .fn()
  .mockImplementation(async (password: string, hashedPassword: string) => {
    return hashedPassword === `hashed_${password}`;
  });

// Função auxiliar para limpar os mocks entre testes
export function resetPasswordMocks() {
  hashGeneratorMock.mockClear();
  comparePassword.mockClear();
}
