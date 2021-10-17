
import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/Menu.vue'//coloco la ruta
import Home from '../views/Home.vue'
import Reserva from '../views/Reserva.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
import  login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,//mismo nombre de import
  },
  {
    path: '/home',//nombre de la ruta
    name: 'Home',
    component: Home//importación de una vista
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: CarritoCompras,//mismo nombre de import
  },
  {
    path: '/Reserva',
    name:'Reserva',
    component: Reserva
  },
  {
    path: '/Login',
    name: 'login',
    component: login
  },
  // {
  //   path: '/compras',
  //   name: 'Compras',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/prueba.vue')
  // },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


