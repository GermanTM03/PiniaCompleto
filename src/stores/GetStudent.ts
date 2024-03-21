import { defineStore } from 'pinia'
import type { IStudent } from '@/interfaces/IStudent'

export const useStudentStore = defineStore({
  id: 'student',
  state: () => ({
    students: [] as IStudent[]
  }),
  actions: {
    async fetchStudents() {
      try {
        const students = await UserService.GetStudent()
        this.students = students
      } catch (error) {
        console.error('No se pudo recuperar los estudiantes:', error)
      }
    }
  },
  getters: {
    getStudentById(id: string): IStudent | null {
      return this.students.find(student => student.id === id) || null
    }
  }
})
