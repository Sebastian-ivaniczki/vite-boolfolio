//import function from vue router

import { createRouter, createWebHistory } from "vue-router";

//import pages

import HomePage from '../components/pages/HomePage.vue';
import DetailPage from '../components/pages/DetailPage.vue'

//route definition

const router = createRouter({
    history: createWebHistory(),
    routes: [
        
    {path: '/', name: 'home', component: HomePage },
    {path: '/detail', name: 'detail', component: DetailPage},
    {path: '/:pathMatch(.*)*', redirect: '/'}
    
]
});

export {router};