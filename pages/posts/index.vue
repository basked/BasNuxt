<template>
  <div>
    <div>
      <h2>Making API request - the VUE way</h2>
      <hr/>
    </div>
    <div class="container row">
      <Cart v-for="post in posts" :key="post.id" :post="post" class="ml-auto mr-auto"/>
      <button  class="btn btn-danger" v-scroll-to="'body'">Back To Top</button>
    </div>


    <!--ver 3-->
    <!--{{posts}}-->
    <!--ver 2-->
    <!--<div class="container">-->
    <!--<div class="card">-->
    <!--<div class="card-header">-->
    <!--Posts-->
    <!--</div>-->
    <!--<ul class="list-group list-group-flush">-->
    <!--<li class="list-group-item" v-for="post in posts" :key="post.id">[{{post.id}}]-{{post.title}}</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--ver 1-->
    <!--<h4 v-for="post in posts" key="post.id">[{{post.id}}]-{{post.title}}> <hr/></h4>-->

  </div>
</template>


<script>
  import axios from 'axios'
  import Cart from "@/components/Cart";
  import {mapGetters} from 'vuex'

  export default {
    components: {Cart},
    data() {
      return {
        allPosts: ''
      }
    },
    computed: {

     ...mapGetters(['posts'])

      // before used mapGetters
      // allPosts() {
      //   return this.$store.getters.posts
      // }
    },
    async  fetch/*asyncData*/({store}) {
      let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')

      //  заменяем на store
      store.dispatch('setPosts', data)
      // return {allPosts: data}
    },
    head: {
      title: 'List of Posts '
    }
  }
</script>


<!--ver 2-->
<!--&lt;!&ndash;With method asyncData&ndash;&gt;-->
<!--<script>-->
<!--import axios from 'axios'-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--posts: ''-->
<!--}-->
<!--},-->
<!--asyncData(context) {-->
<!--return axios.get('https://jsonplaceholder.typicode.com/todos').then(-->
<!--res => {-->
<!--return {posts: res.data}-->
<!--}-->
<!--).catch(err => {-->
<!--console.log('Error in page Posts: '+ err)-->
<!--}-->
<!--)-->
<!--},-->
<!--head:{-->
<!--title:'List of Posts '-->
<!--}-->
<!--}-->
<!--</script>-->

<!--ver 1-->
<!--<script>-->
<!--import axios from 'axios'-->

<!--export default {-->
<!--data() {-->
<!--return {-->
<!--posts: []-->
<!--}-->
<!--},-->
<!--mounted() {-->
<!--axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {-->
<!--console.log(response.data)-->
<!--this.posts = response.data-->
<!--}).catch(error => {-->
<!--console.log(error)-->
<!--})-->
<!--}-->
<!--}-->
<!--</script>-->

<style scoped>

</style>
