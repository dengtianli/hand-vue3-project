import { createApp } from 'vue' //Vue 3.x 引入vue的形式
import App from './App.vue' //引入 App 页面组件
import router from './router/index.js'
import store from './store/index.js'

createApp(App).use(router).use(store).mount('#app')
// const app = createApp(App) // 通过createApp初始化 app
// app.use(router)
// app.use(store)
// app.mount('#app') //将页面挂载到app 节点上