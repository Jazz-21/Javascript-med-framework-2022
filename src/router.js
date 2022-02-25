// Dependencies

import {createRouter, createWebHistory}  from 'vue-router';

const Home = () => import('./components/Home.vue');
const About = () => import('./components/About.vue');
const Contact = () => import ('./views/Contact.vue');
const Services = () => import ('./views/Services.vue');

// Router configuration
const routes= [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    
  ]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
