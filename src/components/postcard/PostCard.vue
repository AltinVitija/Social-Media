<style scoped lang="scss">
@import "./postcard.scss";
</style>

<template>
  <div class="container">
    <!-- top -->
    <div class="view_header">
      <router-link to="/ProfilePage">
        <img class="userimg" src="../../assets/images/user.png" id="profile" />
      </router-link>
    </div>
    <!-- middle -->

    <div class="view_middle">
      <div class="view_input">
        <img
          class="profileimg"
          src="../../assets/images/profile.png"
          id="profile"
        />
        <input
          type="text"
          class="input"
          v-model="insertpost"
          @keyup.enter="formSubmit"
          placeholder="Posto fotografi apo artikull"
        />
      </div>

      <!-- view-card -->
      <div class="view_card">
        <!-- v-on:formSubmit.prevent="formSubmit"
        v-for="(post, index) in posts.post"
        :key="index" -->

        <div class="view_card_header">
          <img
            class="img_card__header_profile"
            src="../../assets/images/profile.png"
            id="profile"
          />
          <div class="view_card_username">
            <span class="txt_card_name">{{ output.posts }}</span>
            <span class="txt_card_username">@{{ output.posts }}</span>
          </div>
          <div class="view_card_menu">
            <img
              class="img_card_header_menu"
              src="../../assets/images/menu.png"
              id="menu"
            />
          </div>
        </div>

        <div class="view_card_middle">
          <div class="view_card_middle_title">
            <span class="view_card_middle_title_txt">{{ posts.title }}</span>
            <span class="view_card_middle_title_body">{{ posts.body }}</span>
          </div>
          <div class="view_card_middle_input">
            <input
              type="text"
              class="input_card_comment"
              placeholder="Komento në këtë postim"
            />
          </div>
          <div class="view_card_middle_komente">
            <span class="view_card_txtkomente" v-if="comments.length">{{
              comment.length
            }}</span>
          </div>
        </div>
        <div
          class="view_card_comments"
          v-for="comment in comments"
          :key="comment.id"
        >
          <div class="view_card_comment_first">
            <span class="txt_comment_email">{{ comment.email }}</span>
            <span class="txt_comment_body">{{ comment.body }}</span>
          </div>

          <div class="view_card_comment_second">
            <span class="txt_comment_email">{{ comments.email }}</span>
            <span class="txt_comment_body">{{ comments.body }}</span>
          </div>
        </div>
        <span class="txt_show_comment" @click="comments"
          >Shiko më shumë komente</span
        >
      </div>
      <!-- view-card -->
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "PostCard",
  data() {
    return {
      comments: [],
      posts: [],
      output: "",
      insertpost: "",
    };
  },

  methods: {
    async formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      await axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          posts: this.insertpost,
        })
        .then(function (response) {
          currentObj.output = response.data;
          // console.log(response.data);
        })
        .catch(function (error) {
          currentObj.output = error;
        });

      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          // this.posts = response.data.map(currency => currency.id)

          this.posts = response.data[0];
          this.loaded = true;
          console.log(this.posts);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
      axios
        .get("https://jsonplaceholder.typicode.com/comments/1")
        .then((response) => {
          this.comments = response.data;
          this.loaded = true;
          // console.log(response.data);
          // console.log(this.comments);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
      this.insertpost = "";
    },
  },
};
</script>
