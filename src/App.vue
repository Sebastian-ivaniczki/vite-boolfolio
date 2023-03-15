<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue'
const url = 'http://127.0.0.1:8000/api/'
export default {
  name: 'App',
  components: {AppHeader, AppCard},
  data: ()=> ({
    projects: []
  }),
  methods:{
    fetchProjects(){
      axios.get(url + 'projects').then((res) =>{
        this.projects = res.data;
      })
    }
  },
  created(){
    this.fetchProjects();
  }
};
</script>

<template>
  
  <AppHeader></AppHeader>
  <main class="container my-5">
    <AppCard :projects="projects"></AppCard>
  </main>
</template>

<style>
/* style */
</style>