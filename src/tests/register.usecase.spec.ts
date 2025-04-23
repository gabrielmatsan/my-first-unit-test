vi.mock("../utils/hash-generate", () => ({
  hashGenerator: (password: string) => `hashed_${password}`,
}));

import { beforeEach, describe, expect, it, vi } from "vitest";
import type { StudentDTO } from "../models/student.model";
import { RegisterStudentUseCase } from "../usecase/register-student.usecase";
import { InMemoryStudentRepository } from "./../repository/in-memory.student-repository";

describe("Register Use Case Tests", () => {
  let inMemoryStudentRepository: InMemoryStudentRepository;
  let sut: RegisterStudentUseCase;

  beforeEach(() => {
    inMemoryStudentRepository = new InMemoryStudentRepository();
    sut = new RegisterStudentUseCase(inMemoryStudentRepository);
  });

  it("deve ser possivel cadastrar um estudante novo", async () => {
    // Arrange
    const student: StudentDTO = {
      name: "Lucas",
      cpf: "123",
      password: "isaac",
    };

    // Act
    await sut.execute(student);

    // Assert
    expect(inMemoryStudentRepository.items[0]).toEqual({
      name: student.name,
      cpf: student.cpf,
      password: `hashed_${student.password}`,
    });
  });

  it("nao deve ser possivel cadastrar um estudante com cpf ja existente", async () => {
    // Arrange
    const student: StudentDTO = {
      name: "Lucas",
      cpf: "123",
      password: "isaac",
    };
    inMemoryStudentRepository.items.push(student);

    // Act & Assert
    await expect(() => sut.execute(student)).rejects.toThrow(
      "CPF já cadastrado"
    );
  });
});
