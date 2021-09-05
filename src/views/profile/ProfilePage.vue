<style scoped lang="scss">
@import "./profilepage.scss";
</style>


<template>
  <div class="conatiner">
    <div class="content">
      <ProfileCard />
    </div>
  </div>
</template>

<script>
import ProfileCard from "../../components/profile/ProfileCard.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileCard,
  },
};
</script>


