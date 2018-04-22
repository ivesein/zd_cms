import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        orderData: []
    },
    mutations: {
        GETCHANNELS(state, res) {
            state.orderData = res;
            console.log(state.orderData);
        },
        getData2(state) {
            console.log(state.orderData)
        }

    },
    actions: {
        getOrderData({ commit }, fn) {
            console.time('请求数据');
            axios
                .post("http://www.zhuoding/api/orderdata")
                .then(response => {
                    var res = response.data.list2;
                    console.timeEnd("请求数据");
                    commit("GETCHANNELS", res);
                    fn();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
});

export default store;