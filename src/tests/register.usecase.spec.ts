import { beforeEach, describe, expect, it, test } from "vitest";
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
    const student: StudentDTO = {
      name: "Lucas",
      cpf: "123",
    };

    await sut.execute(student);

    console.log(inMemoryStudentRepository.items);

    expect(inMemoryStudentRepository.items[0]).toEqual(student);
  });

  it("nao deve ser possivel cadastrar um estudante com cpf ja existente", async () => {
    const student: StudentDTO = {
      name: "Lucas",
      cpf: "123",
    };
    inMemoryStudentRepository.items.push(student);

    await expect(()=> sut.execute(student)).rejects.toThrow('CPF já cadastrado');
  });
});
