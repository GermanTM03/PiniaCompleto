<template>
  <div>
    <h1>Estudiantes:</h1>
    <table class="user-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Grupo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>
            <router-link :to="{ name: 'student', params: { id: user.id } }">
              {{ user.name }}
            </router-link>
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.group }}</td>
          <td>
            <button @click="deleteStudent(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/AuthServices'
import { useRouter } from 'vue-router'
import type IStudent from '@/interfaces/IStudent'

const router = useRouter()
const users = ref<IStudent[]>([])

onMounted(async () => {
  try {
    users.value = await UserService.GetStudent()
  } catch (error) {
    console.error('No se pudieron recuperar los usuarios:', error)
  }
})

const deleteStudent = async (id: string) => {
  try {
    await UserService.DeleteStudent(id);
    users.value = await UserService.GetStudent();
    console.log(`Estudiante con ID ${id} eliminado exitosamente.`);
  } catch (error) {
    console.error(`Error al eliminar estudiante con ID ${id}:`, error);
  }
}
</script>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.user-table th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
