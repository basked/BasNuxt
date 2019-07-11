<template>
  <div>
    <Nav/>
    <!--<div class="jumbotron img-fluid">-->

    <!--</div>-->
    <nuxt />
  </div>
</template>

<style>
  body{
    /*background:  silver;*/
  }
</style>
<script>
  import Nav from "@/components/Nav";

  export default {
    components: {Nav},
  }
</script>
