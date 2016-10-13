import Vue from 'vue'
import VueRouter from 'vue-router'
import sidebar from './components/sidebar.vue'
import routes from './router'
import store from './store'
import '../src/index.scss'
import './index.scss'


Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

router.afterEach(route => {
    store.routerName = route.name
})

const app = new Vue({
    components: {
        sidebar
    },
    router
}).$mount('#app')
