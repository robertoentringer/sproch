<template>
  <section class="expressions">
    <Expression v-for="(item, i) in expressions" :key="i" ref="items" :data-slug="item.slug" :expression="item" />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import { getExpressionsFirsts } from "@/utils/getExpressions"

const expressions = getExpressionsFirsts(10)

export default {
  name: "Expressions",
  components: { Expression },
  data() {
    return {
      perPage: 2,
      expressions: [],
      page: this.$route.query.page || 1,
      observer: null
    }
  },
  computed: {
    total() {
      return expressions.length
    },
    loaded() {
      return this.expressions.length
    },
    pages() {
      return Math.ceil(this.total / this.perPage)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        console.log("watch $route")
      }
    }
  },
  created() {
    this.expressions.push(...expressions.slice(this.loaded, this.loaded + this.perPage * this.page))
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersect)
    this.observeLast()
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    observeLast() {
      this.$nextTick(() => {
        this.observer.observe(this.$refs.items[this.loaded - 1].$el)
      })
    },
    handleIntersect(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          this.observer.unobserve(target)
          if (this.loaded < this.total) {
            this.expressions.push(...expressions.slice(this.loaded, this.loaded + this.perPage))
            this.observeLast()
            this.$router.push({ query: { page: ++this.page } })
          } else this.observer.disconnect()
        }
      })
    }
  }
}
</script>
