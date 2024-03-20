import { defineStore } from 'pinia'
import UserService from '@/services/AuthServices'
import type IStudent from '@/interfaces/IStudent'

export const useStudentStore = defineStore({
  id: 'student',

  state: () => ({
    studentDetails: null as IStudent | null,
  }),

  actions: {
    async fetchStudentDetails(studentId: string) {
      try {
        const students = await UserService.GetStudent()
        this.studentDetails = students.find(student => student.id === studentId) || null
      } catch (error) {
        console.error('No se pudo recuperar el estudiante:', error)
      }
    },
  },
})
