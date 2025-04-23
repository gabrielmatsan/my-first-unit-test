import type { IStudentRepository } from "../interface/student-repository.interface";
import type { StudentDTO } from "../models/student.model";
import { hashGenerator } from "../utils/hash-generate";

export class RegisterStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ name, cpf, password }: StudentDTO): Promise<void> {
    const isCpfAlreadyUsed = await this.studentRepository.getCpf(cpf);

    if (isCpfAlreadyUsed) {
      throw new Error("CPF já cadastrado");
    }

    // const isStrongPassword = password.length >= 8;
    // if (!isStrongPassword) {
    //   throw new Error("A senha deve ter pelo menos 8 caracteres");
    // }

    const passwordHashed = await hashGenerator(password);

    await this.studentRepository.createStudent({
      name,
      cpf,
      password: passwordHashed,
    });
    console.log("Estudante cadastrado com sucesso");
  }
}
