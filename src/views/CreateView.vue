<template>
    <div class="user-registration">
      <h1>Registro de usuario</h1>
      <form @submit.prevent="CreateAlumno" class="registration-form">
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
  import { ref } from 'vue'
  import UserService from '@/services/AuthServices'
  
  let name = ref('')
  let email = ref('')
  let group = ref('')
  

  
  async function CreateAlumno() {
    try {
      await UserService.CreateAlumno(name.value, email.value, group.value)
      name.value = ''
      email.value = ''
      group.value = ''

    } catch (error) {
      console.error('No se pudo registrar al usuario:', error)
    }
  }
  </script>
  
  <style scoped>
  .user-registration {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .registration-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 6px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  @/interfaces/IStudent