/* eslint-disable no-fallthrough */
// 将state导入 建立reducer函数
import _state from './state.js';
import types from './types.js'
import {getList} from '@/fetch/about/index.js'


let reducer = (state=_state,action)=>{
    switch (action.type) {
        case types.changeData:
            const {type,value} =action.data
            state[type]=value
          return Object.assign({}, state,);
        case types.getList:
           

           
            


        //   return Object.assign({}, state, {
        //     todos: [...state.todos, {
        //       text: action.text,
        //       completed: false
        //     }]
        //   });
        default:
          return state;
      }
}
// reducer 用来处理state里面的数据  数据的验证是通过action这个参数里的type进行的。
// action这个参数的传递是通过store.dispatch来分发的。
export default reducer;