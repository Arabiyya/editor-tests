<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tinymce">TinyMCE</RouterLink>
      <RouterLink to="/ckeditor">CKEditor</RouterLink>
      <RouterLink to="/flowbite">Flowbite</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.container>* {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
