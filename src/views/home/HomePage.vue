<style scoped lang="scss">
@import "./home.scss";
</style>


<template>
  <div class="container">
    <div class="view_card">
      <div class="view_inerinput">
        <div class="view_imguser">
          <img
            class="profileimg"
            src="../../assets/images/profile.png"
            id="profile"
          />
        </div>
      </div>
    </div>
    <div class="view_listpost">
      <PostCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import PostCard from "../../components/postcard/PostCard.vue";
export default {
  name: "HomePage",
  components: {
    PostCard,
  },
};
</script>

