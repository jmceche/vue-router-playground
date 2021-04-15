<template>
  <section>
    <div>
      Bar -
      <span @click="testFunc" style="color: #cc0000; cursor: pointer"
        >testFunc()</span
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Bar",
  beforeRouteEnter(to, from, next) {
    console.log("Entering Bar");
    // Pass a callback to next (optional)
    next((vm) => {
      // this callback has access to component instance (ie: 'this') via `vm`
      vm.testFunc("Some Message", true);
      console.log("Fully Entered Bar");
    });
  },
  // set guard on the component options object:
  beforeRouteLeave(to, from, next) {
    console.log("Leaving Bar");
    next();
  },
  methods: {
    testFunc(msg, fromGuard = false) {
      fromGuard
        ? console.log(`This message called from the guard: ${msg}`)
        : console.log(`This message called from component.`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
