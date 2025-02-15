import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

console.log('App is initializing...')

createApp(App)
  .use(router)
  .mount('#app')
