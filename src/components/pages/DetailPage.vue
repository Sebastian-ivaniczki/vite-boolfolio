<script>
import axios from 'axios';
const url = 'http://127.0.0.1:8000/api/'
export default {
    name: 'DetailPage',
    data: () => ({
        project: null
    }),
    methods: {
        getProject(){
            const endpoint = url + 'projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            })
        }
    },
    created(){
        this.getProject()
    }
};
</script>

<template>
    <div class="card" >
  
        <div class="card-header">
    
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
  <div class="card-body">
    <hr>
    <p class="card-text">{{ project.content }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ project.slug }}</li>
    
  </ul>
  <div class="card-body">
    <router-link :to="{name: 'home'}" class="btn btn-primary" aria-current="page" >Back</router-link>
  </div>
</div>
</template>