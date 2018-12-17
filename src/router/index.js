import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/DashBoard'
import Products from '@/components/pages/products'
import newProducts from '@/components/pages/newProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true } // 要求驗證
        },
        {
          path: 'new',
          name: 'newproducts',
          component: newProducts,
          meta: { requiresAuth: true } // 要求驗證
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
