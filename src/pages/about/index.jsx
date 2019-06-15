
import React ,{ useState } from 'react';
import './index.less';
import { connect } from 'react-redux';
import {Button} from 'antd';
import types from '@/store/about/types.js'

function App (props){


    // const plus=()=>{

    //     props.dispatch({
    //         type:types.changeData,
    //         data:{
    //             type:'count',
    //             value:props.count+1
    //         },
           
    //     })
    // }

    // const fet=()=>{

    //     props.dispatch({
    //         type:types.getList,
    //         data:{
    //            a:1213,
    //         }
    //     })
    // }

    const [data, setCount] = useState({count:0});

    const a = ()=>{
        console.log(222)
        data.count++
        setCount({
            count:data.count
        })
    }

    // return(
    //     <div className='about'>
    //         关于页面{props.count}
    //         <div>
    //         <Button type="primary" >点击增加数字</Button>
    //         </div>
    //         <div>
    //         <Button type="primary"  >发送请求</Button>
    //         </div>
    //     </div>
    // )
    return (
              <div>
                <p>You clicked {data.count} times</p>
                <button onClick={a}>
                Click me
               </button>
            </div>
           );
}


const mapStateToProps = (state) => ({
    count: state.about.count
})

export default App;