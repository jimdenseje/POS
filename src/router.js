import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from './views/LoginView.vue'
import AdminView from './views/AdminView.vue'
import UserView from './views/UserView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/admin', component: AdminView },
  { path: '/user', component: UserView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router