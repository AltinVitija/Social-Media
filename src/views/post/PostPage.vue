<style scoped lang="scss">
@import "./postpage.scss";
</style>


<template>
  <div class="container">
    <BlogPost />
  </div>
</template>



<script>
// @ is an alias to /src
import BlogPost from "../../components/blogpost/BlogPost.vue";
export default {
  name: "ProfilePage",
  components: {
    BlogPost,
  },
};
</script>
