
import React from 'react';
import { Layout,Breadcrumb} from 'antd';
import {  Route ,Switch} from 'react-router-dom'
import routes from '@/router/index.js'
const { Content, } = Layout;

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component  {...props} routes={route.routes} />
        )}
      />
    );
  }

class app extends React.Component{
     
    constructor(props){
       super(props)
    }

    render(){
        return(
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           
            {this.props.routes&&this.props.routes.map((route, i) => (
               <RouteWithSubRoutes key={i} {...route} />
            ))}
             {/* <Switch>
              {
                routes.map((route, i) => (
                    <Route exact path={route.path} key={i} component={route.component} />
                  ))
              }
            </Switch> */}

            </div>
          </Content>
        )
    }



}

export default app;