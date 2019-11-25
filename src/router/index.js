import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashbord from '../components/Dashbord'
import Github from '../components/Github'
import Contact from '../components/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashbord',
    component: Dashbord
  },
  {
    path: '/github',
    name: 'github',
    component: Github
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
