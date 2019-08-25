<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 1.5rem 1.5rem 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #fcfcfc;
    margin: 0 5px;
    padding: 0.5rem;
    text-transform: capitalize;
    flex: 1;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
