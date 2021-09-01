<style scoped lang="scss">
    @import './postpage.scss';
</style>


<template>
<div class="main">
    <!-- <li  v-for="posts in posts" :key="posts.id" :posts="posts">{{posts.id}}</li> -->
   <tr v-for="posts in posts" v-bind:key="posts.userId" >
    <td>Title:{{posts.title}}</td>

   </tr>
</div>
</template>



<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: "ProfilePage",

  data(){
      return{
          posts:[]
      }
  },
  created(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
          this.posts=response.data;
      })
      .catch(error=>{
          console.log('There was an error'+error.response)
      })
  }
};
</script>
