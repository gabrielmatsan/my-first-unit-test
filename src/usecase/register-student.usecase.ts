import type { IStudentRepository } from "../interface/student-repository.interface";
import type { StudentDTO } from "../models/student.model";

export class RegisterStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ name, cpf }: StudentDTO): Promise<void> {
    const isCpfAlreadyUsed = await this.studentRepository.getCpf(cpf);

    if (isCpfAlreadyUsed) {
      throw new Error("CPF já cadastrado");
    }

    await this.studentRepository.createStudent({ name, cpf });
    console.log("Estudante cadastrado com sucesso");
  }
}
