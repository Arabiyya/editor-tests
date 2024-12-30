import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TinyMCE from '../views/TinyMCE.vue'
import CKEditor from '../views/CKEditor.vue'
import FlowbiteEditor from '../views/FlowbiteEditor.vue'
import TipTap from '../views/TipTap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: TinyMCE,
    },
    {
      path: '/ckeditor',
      name: 'ckeditor',
      component: CKEditor,
    },
    {
      path: '/flowbite',
      name: 'flowbite',
      component: FlowbiteEditor,
    },
    {
      path: '/tiptap',
      name: 'tiptap',
      component: TipTap,
    },
  ],
})

export default router
