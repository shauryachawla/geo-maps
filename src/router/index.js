import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Navbar from '@/components/layout/Navbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    }
  ]
})
