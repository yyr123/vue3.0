import { RootState } from '@/store/modules'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}

// createApp 是vue中的一个函数，衍生出全局的一个app对象


import { createApp } from 'vue'
import router from './router'
import store, { storeKey } from './store'
import installElementPlus from './element'
import Components from './components'
import './app.scss'
import './vars.scss'
import App from './App.vue'

const app = createApp(App)

import './registerServiceWorker'

app
  .use(store, storeKey)
  .use(router)
  .use(installElementPlus) // elementplus
  .use(Components)
  .mount('#app')
