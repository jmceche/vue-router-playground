import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bar from "../views/Bar.vue";
import Foo from "../views/Foo.vue";
import Err from "../views/Err.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

/* ===========================================
              Per-route Guards
=========================================== */
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/bar", name: "bar", component: Bar },
  { path: "/foo", name: "foo", component: Foo },
  { path: "/error", name: "error", component: Err },
  {
    path: "/user/:userId",
    name: "user",
    component: User,
    props: true,
    // set nav guard on the route definition object:
    beforeEnter: (to, from, next) => {
      console.log("Entering User", to.params.userId);
      to.params.myCustomizations = {};
      next();
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/* ===========================================
              GLOBAL GUARDS
 =========================================== */

// GLobal BEFORE hooks:
router.beforeEach((to, from, next) => {
  console.log("Global -- beforeEach - fired");

  // re-route
  if (to.path === "/foo") {
    next("/");
  }
  // Abort navigation based on some criteria:
  // else if (to.path === '/user/1') {
  //   next(false)
  // }
  else if (to.path === "/error") {
    const err = new Error("My Error Message");

    // pass the error to onError() callback.
    next(err);
  } else {
    next();
  }
});

// Global beforeResolve
router.beforeResolve((to, from, next) => {
  console.log("Global -- beforeResolve - fired.");
  next();
});

// GLobal AFTER hooks:
router.afterEach((to, from) => {
  // This fires after each route is entered.
  console.log(
    `Global -- afterEach - Just moved from '${from.path}' to '${to.path}'`
  );
});

// Register an Error Handler:
router.onError(err => {
  console.error("Handling this error", err.message);
});

export default router;
