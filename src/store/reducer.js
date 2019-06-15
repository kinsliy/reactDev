import {combineReducers} from 'redux';
import linkReducer from './link/reducer'
import aboutReducer from './about/reducer';
// 拿到单个模块的reducer 进行合并 传给store
let reducer = combineReducers({
    link:linkReducer,
    about:aboutReducer
});

export default reducer;