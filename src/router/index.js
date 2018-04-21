import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Hello from '@/components/HelloWorld'
import OverView from '@/components/OverView'
import QueryOrder from '@/components/QueryOrder'
import AddOrder from '@/components/AddOrder'
import SummaryOrder from '@/components/SummaryOrder'
import CustomerInfo from '@/components/queryorder/CustomerInfo'
import OrderInfo from '@/components/queryorder/OrderInfo'
import SomeInfo from '@/components/queryorder/SomeInfo'


Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/home",
            // name: 'Home',
            component: Home,
            children: [{
                    path: "",
                    // name: 'OverView',
                    component: OverView
                },
                {
                    path: "/overview",
                    name: "OverView",
                    component: OverView
                },

                {
                    path: "/CustomerInfo",
                    // name: "CustomerInfo",
                    component: CustomerInfo,
                    //设置meta值 判断组件是否缓存
                    meta: { KeepAlive: true }
                },
                {
                    path: "/OrderInfo",
                    // name: "OrderInfo",
                    component: OrderInfo
                },
                {
                    path: "/SomeInfo",
                    // name: "SomeInfo",
                    component: SomeInfo
                }

                ,
                {
                    path: "/addorder",
                    name: "AddOrder",
                    component: AddOrder
                },
                {
                    path: "/summaryorder",
                    name: "SummaryOrder",
                    component: SummaryOrder
                }
            ]
        },
        {
            path: "/hello",
            name: "Hello",
            component: Hello
        }
    ]
});