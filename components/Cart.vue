<template>
  <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Post ID={{post.id}}</div>
    <div class="card-body">
      <h5 class="card-title"><nuxt-link :to="{name: 'posts-id', params: {id:post.id}}"> {{post.title}}</nuxt-link></h5>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    props: {
      post: Object
    }
  }
</script>

<style scoped>

</style>
