import type { IStudentRepository } from "../interface/student-repository.interface";

export class DeleteStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(cpf: string) {
    const existingStudent = await this.studentRepository.getStudent(cpf);

    if (!existingStudent) {
      throw new Error("Estudante não encontrado");
    }

    await this.studentRepository.deleteStudent(cpf);
    console.log("Estudante deletado com sucesso");
  }
}
