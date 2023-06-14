import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayMovie from "../views/Movie/DisplayMovie.vue"
import DetailList from "../views/Movie/DetailList.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie',
      name: 'Display Movie',
      component: DisplayMovie
    },
    {
      path: '/movie/:id/detail',
      name: 'Detail List',
      component: DetailList
    },
  ]
})

export default router
