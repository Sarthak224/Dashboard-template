import Analytics from "../pages/Analytics";
import CreateUser from "../pages/CreateUser";
import FlipkartPage from "../pages/FlipkartPage";
import Home from "../pages/Home";
import LinkedinPage from "../pages/LinkedinPage";
import Login from "../pages/Login";
import Tables from "../pages/Tables";

export  const routes = [
    {
     path:'/',
     element:<Home />
    },
    {
        path:'/analytics',
        element:<Analytics />
    },
    {
        path:'/tables',
        element:<Tables />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
         path:'/companies/linkedin',
         element:<LinkedinPage />
    },
    {
        path:'/companies/flipkart',
        element:<FlipkartPage />
   },
   {
    path:'/users/create-user',
    element:<CreateUser />
}

]

export  const sidebar_navigation = [
    {
        title:'Dashboard',
        subroutes:[
            {
                icon:"fab fa-dashcube",
                title:"Home",
                url:"/"
            }
            ,{
                icon:"fab fa-dashcube",
                title:"Dashboard 2",
                url:"/"

            }
            ,{
                icon:"fab fa-dashcube",
                title:"Dashboard 3",
                url:"/"

            }
        ]
     },
     {
        title:'Ecommerce',
        subroutes:[
            {
                icon:"fas fa-shopping-cart",
                title:"Home"
            }
            ,{
                icon:"fas fa-file",
                title:"Dashboard 2"
            },
            ,{
                icon:"fas fa-users",
                title:"Users"
            }
            
        ]
     },
     {
        title:'Companies',
        subroutes:[
            {
                icon:"fas fa-cart-arrow-down",
                title:"Flipkart",
                url:"/companies/flipkart"
            }
            ,{
                icon:"fab fa-linkedin",
                title:"Linkedin",
                url:"/companies/linkedin"

            },
            
        ]
     },
     {
        title:'Users',
        subroutes:[
            {
                icon:"fas fa-users",
                title:"Create/Edit user",
                url:"/users/create-user"
            }
           
        ]
     },
]