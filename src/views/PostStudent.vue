<template>
  <div>
    <h1>Detalles del Estudiante</h1>
    <div v-if="student">
      <p>Nombre: {{ student.name }}</p>
      <p>Correo: {{ student.email }}</p>
      <p>Grupo: {{ student.group }}</p>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import UserService from '@/services/AuthServices'
import type IStudent from '@/interfaces/IStudent'

const route = useRoute()
const studentId = ref<string>(route.params.id)
const student = ref<IStudent | null>(null)

onMounted(async () => {
  try {
    const students = await UserService.GetStudent()
    student.value = students.find(student => student.id === studentId.value) || null
  } catch (error) {
    console.error('No se pudo recuperar el estudiante:', error)
  }
})
</script>
