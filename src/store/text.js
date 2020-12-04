export  default {
    state: {
        count: 0,
    },

    getters: {
        doubleCount(state) {  //getters每一个定义的函数接受state
            return state.count * 2
        }

    },
    mutations: {
        add(state) {
            //变更状态
            state.count ++
        },
        decrease(state) {
            state.count --
        }
    },
    actions: {
        delayAdd(context) {
            setTimeout(() => {
                context.commit('add')

            },1000);

        }
    }

}