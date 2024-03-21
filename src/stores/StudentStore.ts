import { defineStore } from 'pinia';
import UserService from '@/services/AuthServices';
import type IStudent from '@/interfaces/IStudent';

export const useStudentStore = defineStore('student', {
  state: () => ({
    users: [] as IStudent[],
  }),
  actions: {
    /* El GetStudents */
    async fetchStudents() {
      try {
        this.users = await UserService.GetStudent();
      } catch (error) {
        console.error('No se pudieron recuperar los usuarios:', error);
      }
    },

    /* DeleteStudent */
    async deleteStudent(id: string) {
      try {
        await UserService.DeleteStudent(id);
        await this.fetchStudents(); // Actualizar la lista después de eliminar
        console.log(`Estudiante con ID ${id} eliminado exitosamente.`);
      } catch (error) {
        console.error(`Error al eliminar estudiante con ID ${id}:`, error);
      }
    },
  },
});
