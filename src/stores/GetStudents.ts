import { useStudentStore } from './StudentStore';
import UserService from '@/services/AuthServices';

export async function fetchStudents() {
  try {
    const store = useStudentStore();
    store.users = await UserService.GetStudent();
  } catch (error) {
    console.error('No se pudieron recuperar los usuarios:', error);
  }
}
