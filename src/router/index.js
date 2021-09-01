import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/home/HomePage.vue";
import PostPage from "../views/post/PostPage.vue"
import ProfilePage from "../views/profile/ProfilePage.vue"
const routes = [
  
  {
    path: "/PostPage",
    name: "PostPage",
    component:PostPage,
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
   path:"/ProfilePage",
   name:"ProfilePage",
   component:ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
