import type { IStudentRepository } from "../interface/student-repository.interface";

export class GetStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(cpf: string) {
    const student = await this.studentRepository.getStudent(cpf);

    if (!student) {
      throw new Error("Estudante não encontrado");
    }

    return student;
  }
}
