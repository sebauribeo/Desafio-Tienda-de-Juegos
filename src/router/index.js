import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: () => import(/* webpackChunkName: "busqueda" */ '../views/Busqueda.vue')
  },

  {
    path: '/total',
    name: 'Total',
    component: () => import(/* webpackChunkName: "total" */ '../views/Total.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "Ventas" */ '../views/Ventas.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
