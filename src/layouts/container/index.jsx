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
    menuList:[
      { path:"/back/1",title:"meun1",icon:"book" },
      { path:"/back/2",title:"meun2",icon:"issues-close",
          children:[
            { title:"meun3",path:"/back/3",icon:"info-circle",children:[
                { title:"meun4",path:"/back/3/4",icon:"bars"},
                { title:"meun5",path:"/back/3/5",icon:"bars"},
                { title:"meun6",path:"/back/3/6",icon:"bars"},
                { title:"meun7",path:"/back/3/7",icon:"bars" }
              ] },
            { title:"meun8",path:"/8",icon:"branches",children:[
                { title:"meun9",path:"/9",icon:"bars" },
                { title:"meun10",path:"/10",icon:"bars" },
              ] },
            { title:"meun11",path:"/11",icon:"bars" },
            { title:"meun12",path:"/12",icon:"bars"},
          ]
       }
    ],
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
          <SiderCommon  menulist={this.state.menuList}    changeMargin={this.changeMargin} />

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