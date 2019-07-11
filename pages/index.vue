<template>
  <div>
    <h1>Hello world</h1>
    <no-ssr>
      <v-select v-model="selected" placeholder="Select Category" :options="['foo','bar']"></v-select>
    </no-ssr>
  </div>
</template>

<script>
  import 'vue-select/dist/vue-select.css';
  export default {
    data() {
      return {
        selected: ''
      }
    }
  }
</script>
