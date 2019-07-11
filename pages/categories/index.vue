<template>
  <div class="container">
    <h1>Category title</h1>
    <pre>CAtegory body</pre>
    <button v-on:click="getDataURL">get data</button>
    <input type="text" v-model="url">
    <pre>
      {{info}}
    </pre>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {


    data() {
      return {
        url:'',
        info: {},
        post: ''
      }
    },
    methods: {
      getDataURL() {

      return  axios
          .get(this.url)
          .then(response => (this.info = response));
      }
    }
  }
</script>

<style scoped>

</style>

