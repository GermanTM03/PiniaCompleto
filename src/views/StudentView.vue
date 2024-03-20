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
            <button @click="deleteStudent(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/StudentStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const studentStore = useStudentStore();
const router = useRouter();

onMounted(() => {
  studentStore.fetchStudents();
});

const deleteStudent = async (id: string) => {
  await studentStore.deleteStudent(id);
};
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
