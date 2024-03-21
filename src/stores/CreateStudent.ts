import UserService from '@/services/AuthServices'
import { ref } from 'vue'

export default function CreateStudent() {
  const name = ref('')
  const email = ref('')
  const group = ref('')

  async function createAlumno() {
    try {
      await UserService.CreateAlumno(name.value, email.value, group.value)
      name.value = ''
      email.value = ''
      group.value = ''
    } catch (error) {
      console.error('No se pudo registrar al usuario:', error)
    }
  }

  return {
    name,
    email,
    group,
    createAlumno
  }
}
