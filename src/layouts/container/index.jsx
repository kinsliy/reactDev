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
      { path:"/back/about",title:"关于页面",icon:"book" },
      { path:"/back/2",title:"水果页面",icon:"issues-close",
          children:[
            { title:"苹果",path:"/back/3",icon:"info-circle",children:[
                { title:"桃子",path:"/back/3/4",icon:"bars"},
                { title:"西瓜",path:"/back/3/5",icon:"bars"},
                { title:"meun6",path:"/back/3/6",icon:"bars"},
                { title:"meun7",path:"/back/3/7",icon:"bars" }
              ] },
            { title:"meun8",path:"/back/8",icon:"branches",children:[
                { title:"meun9",path:"/back/9",icon:"bars" },
                { title:"meun10",path:"/back/10",icon:"bars" },
              ] },
            { title:"meun11",path:"/back/11",icon:"bars" },
            { title:"meun12",path:"/back/12",icon:"bars"},
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

          <ContentCommon {...this.props} />
          
          <FooterCommon  />
        </Layout>
 
      </Layout>
    );
  }
}


export default SiderDemo;