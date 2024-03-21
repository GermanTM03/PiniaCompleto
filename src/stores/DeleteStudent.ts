import { useStudentStore } from './StudentStore';
import UserService from '@/services/AuthServices';
import { fetchStudents } from './GetStudents';

export async function deleteStudent(id: string) {
  try {
    await UserService.DeleteStudent(id);
    await fetchStudents(); // Actualizar la lista después de eliminar
    console.log(`Estudiante con ID ${id} eliminado exitosamente.`);
  } catch (error) {
    console.error(`Error al eliminar estudiante con ID ${id}:`, error);
  }
}
