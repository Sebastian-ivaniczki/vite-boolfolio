//import function from vue router

import { createRouter, createWebHashHistory } from "vue-router";

//import pages

import HomePage from '../components/pages/HomePage.vue';

//route definition

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        
    {path: '/', name: 'home', component: HomePage }
    
]
});

export {router};