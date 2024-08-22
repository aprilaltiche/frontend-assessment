<template>
   <Navigation />    
   <router-view/>

</template>

<script>
import Navigation from '@components/home/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation
  }
};
</script>


