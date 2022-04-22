import Vue from "vue"
import VueRouter from "vue-router"
import loading from "@/components/loading/loading.vue"
import Routes from "./modules"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => ({
      component: import("@/components/register/register.vue"),
      loading,
      delay: 0,
    }),
  },
  ...Routes,
]

const router = new VueRouter({
  routes,
})

export default router
