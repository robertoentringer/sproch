<template>
  <section>
    <Expression
      v-for="(item, i) in expressions"
      :key="i"
      ref="items"
      :data-slug="item.slug"
      :data-p="Math.ceil(i / perPage + 1)"
      :data-page="i % perPage === 0 && i / perPage ? i / perPage + 1 : ''"
      :expression="item"
    />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import { getExpressionsFirsts } from "@/utils/getExpressions"

const expressions = getExpressionsFirsts(16)

export default {
  name: "Expressions",
  title: "Expressions Page",
  description: "Description Expressions Page...",
  components: { Expression },
  data() {
    return {
      perPage: 1,
      expressions: [],
      page: parseInt(this.$route.query.page) || 1,
      observer: null
    }
  },
  computed: {
    total() {
      return expressions.length
    },
    loaded() {
      return this.expressions.length
    }
  },
  created() {
    this.expressions.push(...expressions.slice(this.loaded, this.loaded + this.perPage * this.page))
  },
  mounted() {
    this.observer = new IntersectionObserver(this.intersect)
    this.observe()
  },
  destroyed() {
    this.disconnect()
  },
  methods: {
    disconnect() {
      this.observer.disconnect()
    },
    observe() {
      this.$nextTick(() => {
        this.observer.observe(this.$refs.items[this.loaded - 1].$el)
      })
    },
    intersect([{ target, isIntersecting }]) {
      const slug = target.dataset.slug
      const page = target.dataset.page
      if (isIntersecting) {
        console.log("true", slug, page)
        //this.observer.unobserve(target)
        if (this.loaded < this.total) {
          //this.page++
          this.expressions.push(...expressions.slice(this.loaded, this.loaded + this.perPage))
          this.observe()
          //this.$router.push({ query: { page } })
        }
      } else {
        //console.log("false", slug, page)
        //this.$router.push({ query: { page } })
      }
    }
  }
}
</script>
