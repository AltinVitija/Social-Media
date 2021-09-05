<style scoped lang="scss">
@import "./profilecard.scss";
</style>


<template>
  <div class="container">
    <div class="header">
      <div class="content_header">
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
      <div class="view_router">
        <div class="nav">
          <router-link to="/profilepage"> Profili </router-link>
          <router-link to="/PostPage"> Profili </router-link>
        </div>
      </div>
      <!-- <router-link to="/profilePage">ProfilePage</router-link>
      <router-link to="/postpage">Postimet</router-link>
      <router-view /> -->
    </div>

    <div class="view_card">
      <div class="view_right">
        <div class="view_right_right">
          <span class="txt_Email">Email:</span>
        </div>
        <div class="view_right_middle">
          <span class="txt_Adress">Adress:</span>
        </div>
        <div class="view_right_left">
          <span class="txt_Phone">Phone:</span>
          <span class="txt_Website">Website:</span>
          <span class="txt_Company">Company:</span>
        </div>
      </div>
      <div class="view_left">
        <div class="view_left_right">
          <span class="txt_Email">{{ users.email }}</span>
        </div>
        <div class="view_left_middle">
          <ul class="view_list">
            <span class="txt_Street">Street:</span>
            <span class="txt_Suite">Suite:</span>
            <span class="txt_City">City:</span>
            <span class="txt_ZipCode">ZipCode:</span>
          </ul>
          <ul class="view_list_data_name">
            <span class="txt_Adress" v-if="users.address">{{
              users.address.street
            }}</span>
            <span class="txt_Adress" v-if="users.address">{{
              users.address.suite
            }}</span>
            <span class="txt_Adress" v-if="users.address">{{
              users.address.city
            }}</span>
            <span class="txt_Adress" v-if="users.address">{{
              users.address.zipcode
            }}</span>
          </ul>
        </div>
        <div class="view_left_left">
          <span class="txt_Phone">{{ users.phone }}</span>
          <span class="txt_Website">{{ users.website }}</span>
          <span class="txt_Name_Company"
            >Name:
            <span class="txt_Company" v-if="users.address">{{
              users.company.name
            }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "ProfileCard",

  data() {
    return {
      users: [],
      loaded: false,
    };
  },
  setup() {
    const router = useRouter();
    function goToAbout() {
      router.push("/about");
    }
    return {
      goToAbout,
    };
  },
  created() {
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
