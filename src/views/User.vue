<template>
  <div>
    <div v-if="user">
      User - {{ user.userName }}({{ userId }}) = {{ user.heroName }}
    </div>
  </div>
</template>

<script>
import { userList } from "@/users.js";

export default {
  name: "User",
  props: ["userId"],
  data() {
    return {
      user: {
        userName: "",
        heroName: "",
      },
    };
  },
  mounted() {
    this.user = this.getUser(this.userId);
  },
  methods: {
    getUser(id) {
      console.log("Fetching User");
      return userList[id];
    },
  },
  // set guard on the component options object:
  beforeRouteLeave(to, from, next) {
    console.log("Leaving User");
    next(false);
  },
  /* Called when this component is reused.
  Here we have a chance to update the component
  since mounted() and other life-cycle hooks won't be called
  when a component is reused. */
  beforeRouteUpdate(to, from, next) {
    console.log("Reusing this component.");
    this.user = this.getUser(to.params.userId);
    console.log("Entering User", to.params.userId);

    next();
  },
};
</script>

<style lang="scss" scoped></style>
