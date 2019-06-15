 
 
import about from '@/pages/about/index.jsx'
import container from '@/layouts/container/index.jsx'
import link from '@/pages/link/index.jsx'
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
        name: '第一个路由',
        routes:[
            { path:"/back/about",title:"关于页面",icon:"book", component: about,},
            { title:"桃子",path:"/back/3/4",icon:"bars",component: link,},
                { title:"西瓜",path:"/back/3/5",icon:"bars",component: link,},
                { title:"meun6",path:"/back/3/6",icon:"bars",component: link,},
                { title:"meun7",path:"/back/3/7",icon:"bars",component: link, },
                { title:"meun9",path:"/back/9",icon:"bars" ,component: link,},
                { title:"meun10",path:"/back/9/10",icon:"bars",component: link, },
                { title:"meun11",path:"/back/9/11",icon:"bars" ,component: link,},
                { title:"meun12",path:"/back/9/12",icon:"bars",component: link,},
           
          ]
       
        
    },
     
    
 ]

 export default routers;