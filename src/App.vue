<script>

import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  components: {AppHeader },
  
 
};
</script>

<template>
  
  <AppHeader />
  <main class="container my-5">
   <RouterView />
  </main>
</template>

<style>
/* style */
</style>