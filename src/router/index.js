import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Hello',
            name: 'Hello',
            component: Hello
        }
    ]
})