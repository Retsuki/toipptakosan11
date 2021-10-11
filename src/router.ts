import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Member from './pages/Member.vue'
import MemberDetail from './pages/MemberDetail.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/member/:id',
    component: MemberDetail
  }
]

export const router =  createRouter({
  history: createWebHistory(),
  routes
})