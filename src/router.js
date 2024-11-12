import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import LoginView from './views/LoginView.vue'
import AdminView from './views/AdminView.vue'
import ProductView from './views/ProductView.vue'
import PageNotFound from './views/PageNotFound.vue'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/product', name: 'Product', component: ProductView },
  { path: '/:catchAll(.*)*', name: "PageNotFound", component: PageNotFound},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  //history: createMemoryHistory(),
  routes,
})

export default router