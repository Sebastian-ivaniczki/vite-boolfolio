<script>
import axios from 'axios';
import AppCard from '../AppCard.vue'
const url = 'http://127.0.0.1:8000/api/'    
export default {
        name: 'HomePage',
        components: { AppCard},
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
    <AppCard :projects="projects"></AppCard>
</template>

