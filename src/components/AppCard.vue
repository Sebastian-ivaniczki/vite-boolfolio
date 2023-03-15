<script>
    export default {
        name: 'AppCard',
        props:{
            projects: {
                type: Array

            }
        }
    };
</script>

<template>
    <div class="d-flex flex-wrap">
        <div v-for="project in projects" :key="project.id" class="card my-3 mx-3" style="width: 18rem;">
        <div  class="card-body">
            <h5 class="card-title">{{project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
            
            <div class="d-flex justify-content-between">
                <p><strong>Slug: </strong>{{ project.slug }}</p>
            </div>
        </div>
    </div>
    </div>
    
</template>

<style>
    /* style */
</style>