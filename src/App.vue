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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  #nav,
  main {
    padding: $spaces;
    &#nav {
      padding-bottom: 0;
    }
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    section {
      & > :first-of-type {
        margin-top: 0;
      }
      & > :last-child {
        margin-bottom: 0;
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
