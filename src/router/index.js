import {createRouter, createWebHashHistory} from "vue-router"
// import routes from './routes'
import home from '../views/home.vue'



const routes = [
    {
    path: "/",
    name: "home",
    component: home,
    meta:{
        title:"首页"
    }
        },

    {
    path: "/analyse",
    name: "analyse",
    component: function(){
        return import("../views/analyse.vue")
        },
    meta:{
        title:"智能分析"
    }
        },   
     
    {
        path: "/enroll",
        name: "enroll",
    component: function(){
        return import("../views/enroll.vue")
        },
    meta:{
        title:"注册"
        }
    },

    {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: function(){
        return import("../views/forgetpassword.vue")
        },
    meta:{
        title:"忘记密码"
        }
    },
    
    {
    path: "/forum",
    name: "forum",
    component: function(){
        return import("../views/forum.vue")
        },
    meta:{
        title:"论坛"
        }
    },

    {
    path: "/login",
    name: "login",
    component: function(){
        return import("../views/login.vue")
        },
    meta:{
        title:"登录"
        }
    },

    {
    path: "/posts",
    name: "posts",
    component: function(){
        return import("../views/posts.vue")
        },
    meta:{
        title:"职位"
        }
    },

    {
        path: "/update",
        name: "update",
        component: function(){
            return import("../views/update.vue")
            },
        meta:{
            title:"上传简历"
            }

        },
        {
            path: "/show",
            name: "show",
            component: function(){
                return import("../views/show.vue")
                },
            meta:{
                title:"show"
                }
            },
            {
                path: "/data",
                name: "data",
                component: function(){
                    return import("../views/data.vue")
                    },
                meta:{
                    title:"data"
                    }
                }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to,from)=>{
    document.title=to.meta.title;
});

export default router;

