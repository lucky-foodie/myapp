import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './Action'
Vue.use(Vuex)


const store = new Vuex.Store({
    mutations,
    getters,
    state,
    actions,
    plugins: [persistedState()]
})
export default store