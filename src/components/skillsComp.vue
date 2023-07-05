<template>
 <div :to="{name: 'skills', params: {id: skill.id}}" >
    <div class="Card">
      <img :src="skill.image" :alt="skill.name"/>
      <p>-{{ skill.rate }}</p>
    </div> 
</template>
<script>
export default {
    props: ["skill"]
}
</script>
<style scoped>
    
</style>