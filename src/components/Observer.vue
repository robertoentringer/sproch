<template>
  <component :is="tag">{{ text }}</component>
</template>

<script>
export default {
  abstract: true,
  props: {
    tag: {
      default: "h2",
      type: String
    },
    text: {
      default: "Loading...",
      type: String
    }
  },
  render() {
    return this.$el
  },
  mounted() {
    this.observer = new IntersectionObserver(this.callback)
    this.$nextTick(() => this.observer.observe(this.$el))
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    callback(entries) {
      if (entries[0].isIntersecting) this.$emit("enter")
    }
  }
}
</script>
