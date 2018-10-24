import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import text1 from "@/components/text1";
import text2 from "@/components/text2";
import top from "@/components/top";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/text1',
      name:"text1",
      component:text1
    },
    {
      path: '/text2',
      name: "text2",
      component: text2
    },
    {
      path: '/top',
      name: "top",
      component: top
    }
  ]
})
