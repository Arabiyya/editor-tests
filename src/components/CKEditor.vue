<script setup lang="ts">
import { ref, computed } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

const cloud = useCKEditorCloud({
  version: '44.1.0',
  premium: false
});

const data = ref('<p>Hello world!</p>');

const editor = computed(() => {
  if (!cloud.data.value) {
    return null;
  }

  return cloud.data.value.CKEditor.ClassicEditor;
});

const config = computed(() => {
  if (!cloud.data.value) {
    return undefined;
  }

  const { Essentials, Paragraph, Bold, Italic } = cloud.data.value.CKEditor;

  return {
    licenseKey: '<YOUR_LICENSE_KEY>',
    plugins: [Essentials, Paragraph, Bold, Italic],
    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|']
  };
});
</script>

<template>
  <ckeditor v-if="editor" v-model="data" :editor="editor" :config="config" />
</template>

<style scoped></style>
