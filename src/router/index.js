import Vue from 'vue'
import Router from 'vue-router'
import IFCMain from '@/components/IFCMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IFCMain',
      component: IFCMain
    }
  ]
})
