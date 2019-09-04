<template>
  <section class="expressions">
    <Expression
      v-for="(item, i) in expressions"
      :key="i"
      ref="items"
      :data-slug="item.slug"
      :data-title="item.title"
      :expression="item"
    />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import expressions from "@/utils/getExpressions"

export default {
  name: "Expressions",
  components: { Expression },
  data() {
    return {
      totalPages: 0,
      perPage: 3,
      expressions: [],
      visibles: [],
      observer: null,
      pageTitle: "",
      intersectOptions: {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
      }
    }
  },
  computed: {
    loaded() {
      return this.expressions.length
    }
  },
  created() {
    this.expressions.push(...expressions.slice(0, this.$root.loaded || this.perPage))
    this.totalPages = Math.ceil(expressions.length / this.perPage)
    this.pageTitle = this.$route.meta.title
  },
  mounted() {
    this.$options.observer = new IntersectionObserver(this.handleIntersect, this.intersectOptions)
    this.$refs.items.forEach(item => this.$options.observer.observe(item.$el))
  },
  destroyed() {
    this.$options.observer.disconnect()
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach(({ target: { dataset: { slug, title } }, isIntersecting }) => {
        if (isIntersecting && this.$route.hash.replace(/^#/, "") !== slug) {
          this.$router.push({ query: { slug } }, () => (this.$route.meta.title = `${this.pageTitle} - ${title}`))
          console.log(history.state)
        }
      })
    }
  }
}
</script>
