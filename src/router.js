import {createWebHistory, createRouter} from "vue-router"

import Home from "@/views/Home"
import Error from "@/views/Error"
import About from "@/views/About"

const history = createWebHistory()

export default createRouter({
  history,

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "/:catchAll(.*)",
      name: "error",
      component: Error
    },
  ]
})