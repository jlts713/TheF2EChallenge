import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Order from '@/components/Orders';
import Product from '@/components/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
    },
  ],
});
