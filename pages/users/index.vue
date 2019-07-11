<template>
  <div>
    <h2>hello world</h2>
    <input type="text" @keyup.enter="loadUser" v-model="id">
    <button @click="loadUser">Load user</button>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        id: ''
      }
    },
    methods: {
      loadUser() {
        this.$router.push(`/users/${this.id}`)
      }
    }
  }
</script>
