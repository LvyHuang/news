export default {
    routes:[
        {
            path:"/",
            component:()=>import("../views/Home"),
        },
        {
            path:"/login",
            component:()=>import("../views/Login"),
        },
        {
            path:"/register",
            component:()=>import("../views/Register"),
        },
        {
            path:"/channel/:id",
            component:()=>import("../views/ChannelNews"),
        },
        {
            path:"*",
            component:()=>import("../views/NotFound"),
        },
    ],
    mode:"history"

}