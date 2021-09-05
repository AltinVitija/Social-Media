<style scoped lang="scss">
@import "./blogpost.scss";
</style>

<template>
  <div class="container">
    <div class="view_header">
      <div class="view_profile">
        <img
          class="profileimg"
          src="../../assets/images/profile.png"
          id="profile"
        />
      </div>
      <div class="view_userdata">
        <span class="txt_name">{{ users.name }}</span>
        <span class="txt_username">@{{ users.username }}</span>
      </div>
    </div>
    <div class="view_blog_post">
      <div class="view_card_blog">
        <div class="view_top">
          <img
            class="img_blog__header_profile"
            src="../../assets/images/profile.png"
            id="profile"
          />
          <div class="view_blog_username">
            <span class="txt_blog_name">{{ users.name }}</span>
            <span class="txt_blog_username">@{{ users.username }}</span>
          </div>
          <div class="view_card_menu">
            <img
              class="img_blog_header_menu"
              src="../../assets/images/menu.png"
              id="menu"
            />
          </div>
        </div>
        <div class="view_blog_posts">
          <span class="txt_post_title">{{ posts.title }}</span>
          <span class="txT_post_body">{{ posts.body }}</span>
        </div>
        <span class="txt_komentet">26 Komente</span>
      </div>
    </div>
    <button class="btn">Shiko me shume postime</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "BlogPost",
  data() {
    return {
      users: [],
      loaded: false,
      posts: [],
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // this.test = response.data.map(currency => currency.id)

        this.posts = response.data;
        this.loaded = true;

        console.log(response.data);
        console.log(this.posts);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        // this.test = response.data.map(currency => currency.id)

        this.users = response.data;
        this.loaded = true;

        console.log(response.data);
        console.log(this.users);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>