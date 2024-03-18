<template>
    <section>
      <ul>
        <!-- Aquí es para recorrer la data -->
        <li v-for="(post, index) in posts" :key="index">
          <RouterLink :to="{ name: 'post', params: { id: post.id } }"
            >{{ index +1 }} | {{ post.title }}</RouterLink
          >
        </li>
      </ul>
    </section>
  </template>
  <script lang="ts" setup>
  import PostService from '@/services/PostService'
  import type IPost from '@/interfaces/IPost'
  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  
  const service = new PostService()
  const posts:Ref<IPost[]> = service.getPosts()
  
  onMounted(async () => {
    await service.fetchAll()
  })
  </script>
  
  <style scoped></style>
  