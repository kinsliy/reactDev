 
 
import about from ''

 
 const routers=[

    {
        path: '/first',
        component: First,
        name: '第一个路由',
        routes: [
            {
                path: '1',
                component: ChildOne,
                name: '1-1'
            }
        ]
    },
    {
        path: 'second',
        component: Second,
        name: '第二个路由'
    }


 ]