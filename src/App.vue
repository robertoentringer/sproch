<template>
  <div id="app">
    <NavBar />
    <router-view />
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
<style lang="scss">
body {
  background: #333;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: calc(1em + 1vw);
}
#app {
  overflow-x: hidden;
  position: relative;
}
</style>
