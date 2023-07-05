<template>
    <div :to="{name: 'education', params: {id: education.id}}" >
  <div class="Card">
      <img :src="education.image" :alt="education.period"/>
      <h3>{{ education.period }}</h3>
      <p>{{ education.desc }}</p>
    </div>
    </div>
</template>
<script>
export default {
    props:["education"]
}
</script>
<style scoped>
    
</style> 