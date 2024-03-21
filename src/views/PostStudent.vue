<template>
  <div class="student-details">
    <h1>Detalles del Estudiante</h1>
    <div v-if="student" class="details-container">
      <p><strong>Nombre:</strong> {{ student.name }}</p>
      <p><strong>Correo:</strong> {{ student.email }}</p>
      <p><strong>Grupo:</strong> {{ student.group }}</p>
    </div>
    <div v-else class="loading-message">
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useGetStudent from '@/stores/GetStudent'

const route = useRoute()
const studentId = ref<string>(route.params.id)
const { student, fetchStudent } = useGetStudent(studentId.value)

onMounted(fetchStudent)
</script>

<style scoped>
.student-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.details-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.loading-message {
  margin-top: 20px;
}

.loading-message p {
  font-weight: bold;
  color: #007bff;
  font-size: 18px;
}
</style>
