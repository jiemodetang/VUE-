import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import all from 'views/all/all'
import ninetonine from 'views/ninetonine/ninetonine'
import profit from 'views/profit/profit'
import furnishing from 'views/furnishing/furnishing'
import floor from 'views/floor/floor'
import shop from 'views/shop/shop'
import cart from 'views/cart/cart'
import floorinfo from 'components/common/floor/floorinfo'
import allinfo from 'components/common/all/allinfo'
import furnishinginfo from 'components/common/furnishing/furnishinginfo'
const routes = [
  {
    path: '/',
    redirect: '/all'
  },
  {
    name: 'all',
    path: '/all',
    component: all,
    redirect:'/all/allinfo',
    children:[
      {
        name:'allinfo',
        path:'allinfo',
        component:allinfo
      }
    ]
    
  },
  {
    name: 'ninetonine',
    path: '/ninetonine',
    component: ninetonine,
  
  },
  {
    name: 'profit',
    path: '/profit',
    component: profit
  },
  {
    name: 'furnishing',
    path: '/furnishing',
    component: furnishing,
    redirect:'/furnishing/furnishinginfo',
    children:[
      {
        name:'furnishinginfo',
        path:'furnishinginfo',
        component:furnishinginfo
      }
    ]
  },
  {
    name: 'floor',
    path: '/floor',
    component: floor,
    redirect: '/floor/1',
    children:[
      {
        path:':username',
        component:floorinfo
      }
    ]
  },
  {
    name:'shop',
    path:'/shop',
    component:shop
  },
  {
    name:'cart',
    path:'/cart',
    component:cart
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router