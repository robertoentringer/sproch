<template>
  <div id="app">
    <NavBar />
    <main><router-view /></main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

<style src="normalize.css" />
<style src="@/scss/base.scss" lang="scss"></style>

<style lang="scss">
#app {
  overflow-x: hidden;
  position: relative;
  main {
    padding: 0 5vw;
  }
}
</style>
