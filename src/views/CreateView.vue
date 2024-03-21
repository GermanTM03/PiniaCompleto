<template>
  <div class="user-registration">
    <h1>Registro de Alumnos</h1>
    <form @submit.prevent="createAlumno" class="registration-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="group">Grupo:</label>
        <input type="text" id="group" v-model="group" required>
      </div>
      <button type="submit" class="submit-button">Registrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import CreateStudent from '@/stores/CreateStudent'

const { name, email, group, createAlumno } = CreateStudent()
</script>

<style scoped>
.user-registration {
  max-width: 400px;
  margin: 0 auto;
  text-align: center; /* Centra el contenido horizontalmente */
}

.registration-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
