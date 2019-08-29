<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/Contact">Contact</router-link>
  </nav>
</template>

<style lang="scss">
#nav {
  padding: 2rem 1rem 2.5rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  a {
    text-decoration: none;
    font-weight: 700;
    color: $text-light;
    margin: 0 5px;
    padding: 0.5rem;
    text-transform: capitalize;
    flex: 1;
    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
