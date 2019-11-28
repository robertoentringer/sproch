<template>
  <nav id="nav">
    <router-link to="/">
      <icon-base icon-name="Home page"><icon-home /></icon-base>
    </router-link>
    <router-link to="/About">
      <icon-base icon-name="About us"><icon-about /></icon-base>
    </router-link>
    <router-link to="/Contact">
      <icon-base icon-name="Contact us"><icon-contact /></icon-base>
    </router-link>
  </nav>
</template>

<script>
import IconBase from "@/components/icons/IconBase"
import IconHome from "@/components/icons/IconHome"
import IconAbout from "@/components/icons/IconAbout"
import IconContact from "@/components/icons/IconContact"
export default {
  name: "Menu",
  components: { IconBase, IconHome, IconAbout, IconContact }
}
</script>

<style lang="scss">
#nav {
  padding: 2rem 1rem 2.5rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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
