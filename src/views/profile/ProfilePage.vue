<style scoped lang="scss">
    @import './profilepage.scss';
</style>


<template>
<div class="main">
    <span  v-for="users in users" :key="users.id" :users="users">{{users.id}}Test</span>

            <ProfileCard/>
</div>
</template>



<script>
// @ is an alias to /src
import ProfileCard from "../../components/profile/ProfileCard.vue";
import axios from 'axios'
export default {
  name: "ProfilePage",
  components: {
    ProfileCard,
  },
  data(){
      return{
          users:[]
      }
  },
  created(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
          this.users=response.data;
      })
      .catch(error=>{
          console.log('There was an error'+error.response)
      })
  }
};
</script>
