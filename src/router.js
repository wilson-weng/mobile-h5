import Vue from 'vue'
import VueRouter from 'vue-router'
import recruitPost from './site/views/recruitPost.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: "/recruit/post",
    name: "recruitPost",
    component: recruitPost,
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes,
})

export default router
