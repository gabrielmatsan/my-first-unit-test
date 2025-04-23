import type { StudentDTO } from "../models/student.model";

export interface IStudentRepository {
  createStudent(student: StudentDTO): Promise<void>;
  getCpf(cpf: string): Promise<string | null>;
}
