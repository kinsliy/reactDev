/* eslint-disable no-useless-constructor */
import React from "react";

import "./index.less";
import SiderCommon from './sider/index.jsx'
import { Layout, Menu, Icon } from 'antd';

// const { Header, Sider, Content } = Layout;



class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className='container'>
          <SiderCommon  />
 
      </Layout>
    );
  }
}


export default SiderDemo;