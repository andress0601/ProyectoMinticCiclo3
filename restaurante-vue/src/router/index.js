
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'//coloco la ruta
import Reserva from '../views/Reserva.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
const routes = [
  {
    path: '/',//nombre de la ruta
    name: 'Home',
    component: Home//importación de una vista
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,//mismo nombre de import
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: CarritoCompras,//mismo nombre de import
  },
  {
    path: '/Reserva',
    name:'Reserva',
    component: Reserva,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


