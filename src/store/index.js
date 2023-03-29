import { createStore } from "vuex"

// const user = {
//     state:{
//         st_num : 0 ,
//     },
//     getter:{

//     },
//     mutations:{
//         mu_sub(state,payload){
//             state.st_num-=payload.n;
//         }
//     },
//     action:{
//         ac_sub({commit,state,getters},payload){
//             commit('mu_sub',payload);   
//         }
//     },
//     modules:{

//     } 
// }

export default createStore({
    state:{
        st_num : 0 ,
    },
    getter:{

    },
    mutations:{
        mu_sub(state,payload){
            state.st_num-=payload.n;
        }
    },
    action:{
        ac_sub({commit,state,getters},payload){
            commit('mu_sub',payload);   
        }
    },
    modules:{
        // user
    }
})