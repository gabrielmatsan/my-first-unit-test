import type { IStudentRepository } from "../interface/student-repository.interface";
import type { StudentDTO } from "../models/student.model";

export class UpdateStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(cpf: string, student: StudentDTO) {
    const existingStudent = await this.studentRepository.getStudent(cpf);

    if (!existingStudent) {
      throw new Error("Estudante não encontrado");
    }

    await this.studentRepository.updateStudent(cpf, student);
  }
}
