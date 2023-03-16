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
    <div>
        <div v-for="project in projects" :key="project.id" class="card my-3 mx-3">
        <div  class="card-body">
            <h5 class="card-title">{{project.title }}</h5>
            <hr>
            <p class="card-text my-5">{{ project.content }}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
                <p><strong>Slug: </strong>{{ project.slug }}</p>

                <router-link :to="{name: 'project-detail', params:{id: project.id}}" class="btn btn-primary">Details</router-link>
            </div>
        </div>
    </div>
    </div>
    
</template>

<style>
    /* style */
</style>