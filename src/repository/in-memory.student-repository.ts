import type { IStudentRepository } from "../interface/student-repository.interface";
import type { StudentDTO } from "../models/student.model";

export class InMemoryStudentRepository implements IStudentRepository {
  public items: { name: string; cpf: string }[] = [];
  async createStudent(student: StudentDTO): Promise<void> {
    const studentCreated = {
      name: student.name,
      cpf: student.cpf,
    };

    this.items.push(studentCreated);
  }
  async getCpf(cpf: string): Promise<string | null> {
    const student = this.items.find((student) => student.cpf === cpf);

    if (!student) {
      return null;
    }

    return student.cpf;
  }
}
