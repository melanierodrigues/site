import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Plugins */
import i18n from './assets/setup/i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)

app.mount('#app')
