import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/components/pages/Login.vue'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () =>
      import(/* webpackChunkName: "movies" */ '@/components/movies/Movies.vue'),
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () =>
      import(
        /* webpackChunkName: "characters" */ '@/components/characters/Characters.vue'
      ),
  },
  {
    path: '/actors',
    name: 'Actors',
    component: () =>
      import(/* webpackChunkName: "actors" */ '@/components/actors/Actors.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const routeIsPublic = path => {
  return (
    path === '/' ||
    path === '/movies' ||
    path === '/actors' ||
    path === '/characters' ||
    path === '/login'
  )
}

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  if (store.state.signedIn || routeIsPublic(to.path)) return next()
  else return next('/login')
})

export default router
