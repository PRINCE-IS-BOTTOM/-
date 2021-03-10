import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      name:"Login",
      component:()=>import('./pages/Login.vue')
    },
    {
      path:"/layout",
      name:"layout",
      component:()=>import('./pages/layout.vue')
    }
  ]
})
