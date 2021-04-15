<template>
  <div id="app">
    <h1>Vue Router Navigation Guards Explained</h1>

    <nav class="mainNav">
      <!-- use router-link component for navigation. -->
      <router-link :to="{ name: 'home' }">Home</router-link>
      <!-- specify the link by passing the `to` prop. -->
      <router-link :to="{ name: 'user', params: { userId: 1 } }"
        >User One</router-link
      >
      <router-link :to="{ name: 'user', params: { userId: 2 } }"
        >User Two</router-link
      >
      <router-link :to="{ name: 'user', params: { userId: 3 } }"
        >User Three</router-link
      >
      <router-link :to="{ name: 'bar' }">Bar</router-link>
      <router-link :to="{ name: 'foo' }">Foo</router-link>
      <router-link :to="{ name: 'error' }">Error</router-link>
    </nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <section class="mainBody">
      <router-view></router-view>
    </section>
  </div>
</template>

<style lang="scss">
#app {
  max-width: 800px;
  margin: auto;
}

code {
  background: #f2f2f2;
  padding: 0 0.5rem;
}

.mainBody {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
  padding: 1rem 0;
}

nav.mainNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  > *:nth-last-child(n + 2) {
    border-right: 1px solid #aaa;
  }
}
</style>
