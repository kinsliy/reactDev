
// const state = {
//     list:[],
//     count:0
// }

import {observable} from 'mobx';

const  state = observable({
    count: 0
});

export default state;