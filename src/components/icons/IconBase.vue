<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="presentation">
    <title lang="en">{{ iconName }}</title>
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "icon"
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
  width: 3em;
  height: 3em;
  fill: currentColor;
}
</style>
