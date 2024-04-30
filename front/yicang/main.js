import { createSSRApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
export function createApp() {
  const app = createSSRApp(App);
  // app.use(VueAxios, axios);
  return {
    app
  }
}
