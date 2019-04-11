import Vue from 'vue'
import Router from 'vue-router'

import Home from "./pages/Home/Home.vue"

import Login from "./pages/Login.vue"
import Reg from "./pages/Registry.vue"

import Share from "./pages/Share/Share.vue"
import Newshare from "./pages/Share/Newshare.vue";

import User from "./pages/User/User.vue"

import Userindex from "./pages/User/Userindex.vue"
import About from "./pages/User/About.vue"
import News from "./pages/News/News.vue";


Vue.use(Router)

export default new Router({
  // mode:history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      name: 'login',
      component: Login
    },
    {
      path: "/reg",
      name: 'reg',
      component: Reg
    },
    {
      path:"/share",
      name:'share',
      component:Share,
      // children:[
      //   { path:"newshare", component:Newshare}
      // ]
    }, 
    {
      path:"/news",
      name:'news',
      component:News
    },
    {
      path:"/user",
      name:'user',
      component:User,
      // children:[
      //   { path:"userindex",  component:Userindex}
      // ]
    },
    {
      path:"/newshare",
      name:'newshare',
      component:Newshare

    },
    {
      path:"/about",
      name:'about',
      component:About
    },
    {
      path:"/userindex",
      name:'userindex',
      component:Userindex
    }
  ]
})
