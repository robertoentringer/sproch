<script>
export default {
  abstract: true,
  render() {
    return this.$slots.default[0]
  },
  mounted() {
    this.observer = new IntersectionObserver(this.callback)
    this.$nextTick(() => this.observer.observe(this.$slots.default[0].elm))
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
