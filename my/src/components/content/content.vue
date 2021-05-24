<template>
  <div class="Content">
       <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    
  },
  
}
</script>

<style scoped>
.Content{
  width: 100%;
}
</style>
