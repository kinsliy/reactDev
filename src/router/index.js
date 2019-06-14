 
 
import about from '@/pages/about/index.jsx'
import container from '@/layouts/container/index.jsx'
 
 const routers=[

    {
        path: '/about',
        component: about,
        name: '第一个路由',
        routes: [
            {
               
            }
        ]
    },
    {
        path: '/back',
        component: container,
        name: '后台layout',
        routes: [
            {
               
            }
        ]
    },
    
 ]

 export default routers;