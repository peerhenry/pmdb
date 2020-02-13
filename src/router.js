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
    path: '/movie/:id',
    name: 'Movie',
    component: () =>
      import(
        /* webpackChunkName: "movie" */ '@/components/movies/MovieDetailsPage.vue'
      ),
    props: true,
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
    path: '/character/:id',
    name: 'Character',
    component: () =>
      import(
        /* webpackChunkName: "movie" */ '@/components/characters/CharacterDetailsPage.vue'
      ),
    props: true,
  },
  {
    path: '/actors',
    name: 'Actors',
    component: () =>
      import(/* webpackChunkName: "actors" */ '@/components/actors/Actors.vue'),
  },
  {
    path: '/actor/:id',
    name: 'Actor',
    component: () =>
      import(
        /* webpackChunkName: "movie" */ '@/components/actors/ActorDetailsPage.vue'
      ),
    props: true,
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
