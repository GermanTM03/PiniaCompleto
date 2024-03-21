// GetStudent.ts

import { ref } from 'vue'
import UserService from '@/services/AuthServices'
import type IStudent from '@/interfaces/IStudent'

export default function useGetStudent(studentId: string) {
  const student = ref<IStudent | null>(null)

  const fetchStudent = async () => {
    try {
      const students = await UserService.GetStudent()
      student.value = students.find(student => student.id === studentId) || null
    } catch (error) {
      console.error('No se pudo recuperar el estudiante:', error)
    }
  }

  return {
    student,
    fetchStudent
  }
}
