import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import Enchantments from '@/views/Enchantments.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/enchantments', name: 'Enchantments', component: Enchantments },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
