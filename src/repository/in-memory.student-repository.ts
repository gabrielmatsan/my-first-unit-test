import type { IStudentRepository } from "../interface/student-repository.interface";
import type { StudentDTO } from "../models/student.model";

export class InMemoryStudentRepository implements IStudentRepository {
  public items: { name: string; cpf: string }[] = [];
  async getStudent(cpf: string): Promise<StudentDTO | null> {
    const student = this.items.find((student) => student.cpf === cpf);

    if (!student) {
      return null;
    }

    return student;
  }
  async getAllStudents(): Promise<StudentDTO[]> {
    return this.items;
  }
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
  async updateStudent(cpf: string, student: StudentDTO): Promise<void> {
    const indexOldStudent = this.items.findIndex(
      (student) => student.cpf === cpf
    );

    if (indexOldStudent === -1) {
      return
    }

    this.items[indexOldStudent] = student;
  }
  async deleteStudent(cpf: string): Promise<void> {
    const indexOldStudent = this.items.findIndex((item) => item.cpf === cpf);

    this.items.splice(indexOldStudent, 1);
  }
}
