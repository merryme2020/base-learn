export  default {  //模块独立的state、getters、mutations、actions
    state: {
        count: 0,  //定义计数变量
    },

    getters: {  //定义计算属性
        doubleCount(state) {  //getters每一个定义的函数接受state
            return state.count * 2
        }

    },
    //mutations定义方法，注册事件
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
        delayAdd(context) {   //接收一个context上下文
            setTimeout(() => {
                context.commit('add')  //提交mutation 触发事件

            },1000);

        }
    }

}
