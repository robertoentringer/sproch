<template>
  <section class="expressions">
    <Expression
      v-for="(item, i) in expressions"
      :key="i"
      ref="items"
      :data-slug="item.slug"
      :data-title="item.slug"
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
      current: null,
      intersectOptions: {
        root: null,
        rootMargin: "0px",
        threshold: 0.25
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
      entries.forEach(({ target: { dataset: { slug, title } }, /*intersectionRatio*/ isIntersecting }) => {
        if (
          this.$route.hash.replace(/^#/, "") !== slug &&
          isIntersecting /*intersectionRatio > this.intersectOptions.threshold*/
        ) {
          document.title = `${this.$route.meta.title} - ${title}`
          //this.$router.push({ hash: slug })
          window.history.pushState("", "", `#${slug}`)
          //this.visibles.push(slug)
        }
        //else this.visibles = this.visibles.filter(item => item !== slug)
      })
    }
  }
}
</script>
