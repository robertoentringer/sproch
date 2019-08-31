<template>
  <div>Loading...</div>
</template>

<script>
import "intersection-observer"

export default {
  abstract: true,
  data: () => ({ observer: null }),
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => entry.isIntersecting && this.$emit("intersect"))
    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  }
}
</script>
