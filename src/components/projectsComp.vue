<template>
<div :to="{name: 'projects', params: {id: project.id}}">
        <div class="Card">
      <img :src="project.image" :alt="project.name"/>
      <h3>{{ project.name }}</h3>
      <button><a href="project.github">Github</a></button> <button><a href="project.netlify">Netlify</a></button>
    </div>
    </div>
</template>
<script>
export default {
    props: ["project"]
}
</script>
<style scoped>
    
</style>