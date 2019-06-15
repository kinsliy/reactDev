/* eslint-disable no-useless-constructor */
import React from "react";

import "./index.less";
import SiderCommon from './sider/index.jsx';
import HeaderCommon    from './header/index.jsx';
import ContentCommon    from './content/index.jsx';
import FooterCommon    from './footer/index.jsx';
import { Layout, } from 'antd';


class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    marginLeft:'256px',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  changeMargin=(flag)=>{
    
    if(!flag){
      this.setState({
        marginLeft: '256px',
      });
    }else{
      this.setState({
        marginLeft: '80px',
      });
    }
    
  }

  render() {
    return (
      <Layout className='container' style={{ minHeight: '100vh' }} >
          <SiderCommon  changeMargin={this.changeMargin} />

          <Layout style={{ marginLeft: this.state.marginLeft }} >
          <HeaderCommon   />

          <ContentCommon  />
          
          <FooterCommon />
        </Layout>
 
      </Layout>
    );
  }
}


export default SiderDemo;