import type { StudentDTO } from "./../models/student.model";

export interface IStudentRepository {
  createStudent(student: StudentDTO): Promise<void>;
  updateStudent(cpf: string, student: StudentDTO): Promise<void>;
  deleteStudent(cpf: string): Promise<void>;
  getStudent(cpf: string): Promise<StudentDTO | null>;
  getAllStudents(): Promise<StudentDTO[]>;
  getCpf(cpf: string): Promise<string | null>;
}
