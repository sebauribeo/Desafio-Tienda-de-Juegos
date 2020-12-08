import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
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
    component: () => import(/* webpackChunkName: "ventas" */ '../views/Ventas.vue')
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
