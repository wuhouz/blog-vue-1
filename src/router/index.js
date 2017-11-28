import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import List from '@/components/List'

// const HelloWorld = () => import('../components/HelloWorld.vue')


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld,
      // redirect: '/html'
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List,
      props: true
    },
    {
      path: 'detail/:id',
      name: 'detail',
      component: Detail,
    }
  ]
})
