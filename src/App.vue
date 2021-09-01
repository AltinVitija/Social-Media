<template>
<div class="content">
  <div class="testtwo">
      <NavBar/>
  </div>
</div>
</template>


<script>


// @ is an alias to /src
import NavBar from "../src/components/navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>


<style lang="scss">
.content{
  background-color: #EEEEEE;
  min-height: 100vh;
  min-width: 100%;
  position: absolute;
  padding:0;
  margin: 0;
  right: 0;
  top:0;
  margin-top: 0;
  justify-content: center;
}


</style>