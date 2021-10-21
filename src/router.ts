import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Member from './pages/Member.vue'
import MemberDetail from './pages/MemberDetail.vue'
import Login from './pages/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
  },
  {
    path: '/member/:id',
    component: MemberDetail,
  },
  {
    path: '/login',
    component: Login,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
