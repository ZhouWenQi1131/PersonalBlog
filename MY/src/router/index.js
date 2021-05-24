import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'',
    redirect: '/Home/首页'
  },
  {
    path: '/Home/:nav',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/diary/:id',
    name: 'Diary',
    component: () => import('../views/Diary.vue')
  },
  {
    path: '/messageBoard/:id',
    name: 'MessageBoard',
    component: () => import('../views/MessageBoard.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  
})


export default router
