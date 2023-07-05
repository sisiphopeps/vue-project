<template>
    <div :to="{name: 'testimonials', params: {id: testimonial.id}}" >
    <div class="Card">
      <img :src="testimonial.image" :alt="testimonial.name"/>
      <h3>{{ testimonial.name }}</h3>
      <p>-{{ testimonial.description }}</p>
    </div> 
</template>
<script>
export default {
    props: ["testimonial"]
}
</script>
<style scoped>
    
</style>