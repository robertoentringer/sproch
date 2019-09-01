<template>
  <section class="expressions">
    <Expression v-for="item in expressions" :key="item.slug" :expression="item" />
    <Observer v-if="observerVisible" @intersect="intersect" />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import Observer from "@/components/Observer"
import expressions from "@/utils/getExpressions"

export default {
  name: "Expressions",
  components: {
    Expression,
    Observer
  },
  data() {
    return {
      data: [],
      totalPages: 0,
      perPage: 10,
      expressions: []
    }
  },
  computed: {
    loaded() {
      return this.expressions.length
    },
    observerVisible() {
      return this.loaded < this.data.length
    }
  },
  created() {
    this.data = expressions
    this.expressions.push(...this.data.slice(0, this.$root.loaded || this.perPage))
    this.totalPages = Math.ceil(this.data.length / this.perPage)
  },
  methods: {
    intersect() {
      const items = this.data.slice(this.loaded, this.loaded + this.perPage)
      this.$root.loaded = this.expressions.push(...items)
    }
  }
}
</script>
