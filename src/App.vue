<script>
  import MapApp from './components/MapApp.vue';

  export default{
    components:{
      MapApp
    }
  }
</script>

<template>
  <MapApp/>
  <form action="google.com">
    <input type="text" id="latitude" name="latitude">
    <input type="text" id="longitude" name="longitude">
  </form>
</template>

<style scoped>

</style>