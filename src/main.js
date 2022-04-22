import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import "animate.css"
import Message from "@/components/message/message.js"

Vue.use(Message)
Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8001"
Vue.prototype.$axios = axios

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
