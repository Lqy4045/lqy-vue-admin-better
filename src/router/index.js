import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  // {
  //   path: '/register',
  //   component: () => import('@/views/register/index'),
  //   hidden: true,
  // },
  // {
  //   path: '/401',
  //   name: '401',
  //   component: () => import('@/views/401'),
  //   hidden: true,
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/views/404'),
  //   hidden: true,
  // },
];
const router = new VueRouter({
  routes: constantRoutes,
});

export default router;
