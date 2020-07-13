<template>
  <div id="app" :class="pageClass">
    <NavBar />
    <main>
      <transition name="fade-down" mode="out-in" appear>
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    pageClass() {
      return `view-${this.$route.name}`
    }
  }
}
</script>

<style src="normalize.css" />
<style src="@/scss/base.scss" lang="scss"></style>

<style lang="scss">
#app {
  background: $bg-dark;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  main {
    padding: 0 5vw;
    section {
      & > :first-of-type {
        margin-top: 0;
      }
    }
  }
}
.fade-down-enter-active {
  animation-name: fadeInDown;
  animation-duration: 0.4s;
}
.fade-down-leave-active {
  animation-name: fadeOutDown;
  animation-duration: 0.4s;
}
@keyframes fadeInDown {
  from {
    opacity: 0.04;
    transform: translate3d(0, 25px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0.04;
    transform: translate3d(0, 25px, 0);
  }
}
</style>
