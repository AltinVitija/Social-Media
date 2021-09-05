import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home/HomePage.vue";
import PostPage from "../views/post/PostPage.vue"
import ProfilePage from "../views/profile/ProfilePage.vue"

const routes = [
{
    
  path:"/",
  name:"HomePage",
  props:true,
  component:HomePage,

},
  {
    path: "/PostPage",
    name: "PostPage",
    props:true,
    component:PostPage,

    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
   path:"/ProfilePage",
   name:"ProfilePage",
  props:true,
  component:ProfilePage,
  
 
  },

  
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  next()
  window.scrollTo(0, 0)
})


export default router;
