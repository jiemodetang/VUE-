const state = {
    items: [],
    allchecked:false

}

  
  

  const mutations = {
    push (state, product) {
      state.items.push(product)
    },
    update (state, item) {
      item.item.inventory=item.num
    },
    allcc(state, aaa){
      state.allchecked=aaa
    },
    prodd(state, list){
      state.items=list
    }
  }
  
  const actions = {
      //本来传的是store对象，解构赋值了一下
    addToCart ({ commit, state }, product) {   
        if (product.inventory>1) {
          let item = state.items.find(item => item.value === product.value)
          if(!!item){
              commit('update', {item,num:product.inventory})
          }else{
              commit('push',product)
          }
        }




    //   if (product.inventory>0) {
    //     let item = state.items.find( item => item.id === product.id )
    //     if (!!item) {
    //       commit('update', item)
    //     } else {
    //       commit('push', {
    //         id: product.id,
    //         quantity: 1
    //       })
    //     }
  
    //     commit('products/update', { id: product.id }, { root: true })
    //   }
    },
    allc({ commit, state }, aaa){
      commit('allcc',aaa)
    },
    prod({ commit, state }, list){
      commit('prodd',list)
    },
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
  }