<template>
  <div>
    <h1>Tabla De Estudiantes</h1>
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
        <tr v-for="(user, index) in studentStore.users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>
            <router-link :to="{ name: 'student', params: { id: user.id } }">
              {{ user.name }}
            </router-link>
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.group }}</td>
          <td>
            <button class="delete-button" @click="onDeleteStudent(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStudentStore } from '@/stores/StudentStore';
import { fetchStudents } from '@/stores/GetStudents';
import { deleteStudent } from '@/stores/DeleteStudent';

const studentStore = useStudentStore();
const router = useRouter();

onMounted(() => {
  fetchStudents();
});

const onDeleteStudent = async (id: string) => {
  await deleteStudent(id);
};
</script>

<style scoped>
.user-table {
  width: 80%;
  margin-left: 10%;
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

.delete-button {
  padding: 6px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
