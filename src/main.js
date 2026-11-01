import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillsView from './views/SkillsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import VeilleView from './views/VeilleView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/profil', component: AboutView },
  { path: '/competences', component: SkillsView },
  { path: '/projets', component: ProjectsView },
  { path: '/veille', component: VeilleView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
