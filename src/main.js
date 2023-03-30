import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDragscroll from 'vue-dragscroll'

/* Plugins */
import i18n from './assets/setup/i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(VueDragscroll)

app.mount('#app')
