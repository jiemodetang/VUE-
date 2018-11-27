const state = {
    city:""
}
const getters = {

}
const actions = {
    savecity({ commit, state }, city){

        
        commit('push',city)
    }
}

const mutations = {
    push(state,city){
        
        state.city =city
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}