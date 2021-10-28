import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/Menu.vue'//coloco la ruta
import Register from '../views/Register.vue'
import Reserva from '../views/Reserva.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
import  login from '../views/login.vue'
import Factura from '../views/Factura.vue'
import isSecurity from './proteccion'
import Ventas from '../components/Ventas.vue'


const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,//mismo nombre de import
  },
  {
    path: '/register',//nombre de la ruta
    name: 'register',
    component: Register//importación de una vista
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: CarritoCompras,//mismo nombre de import
    beforeEnter:[isSecurity],
  },
  {
    path: '/Reserva',
    name:'Reserva',
    component: Reserva,
    beforeEnter:[isSecurity],
  },
  {
    path: '/Login',
    name: 'login',
    component: login,
  },
  {
    path: '/Factura',
    name: 'Factura',
    component: Factura,
    beforeEnter:[isSecurity],
  },

  {
    path: '/Ventas',
    name: 'Ventas',
    component: Ventas,
    
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
