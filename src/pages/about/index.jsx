
import React from 'react';
import './index.less';
import { connect } from 'react-redux';
import {Button} from 'antd';
import types from '@/store/about/types.js'

const app = (props)=>{
    const plus=()=>{

        props.dispatch({
            type:types.changeData,
            data:{
                type:'count',
                value:props.count+1
            }
        })
    }


    return(
        <div className='about'>
            关于页面{props.count}

            <Button type="primary" onClick={plus} >点击增加数字</Button>
        </div>
    )
}


const mapStateToProps = (state) => ({
    count: state.about.count
})

export default connect(mapStateToProps)(app);