<template>
  <main class="expressions">
    <Expression v-for="(expression, i) in expressions" :key="i" :expression="expression" />
    <Observer v-if="observerVisible" @enter="intersectEnter" />
  </main>
</template>

<script>
import Expression from "@/components/Expression"
import Observer from "@/components/Observer"
import expressions from "@/utils/getExpressions"

export default {
  name: "expressions",
  components: {
    Expression,
    Observer
  },
  methods: {
    intersectEnter() {
      if (this.observerVisible)
        this.expressions.push(...this.data.slice(this.expressions.length, this.expressions.length + this.perPage))
    }
  },
  computed: {
    observerVisible() {
      return this.expressions.length < this.data.length
    }
  },
  created() {
    expressions.then(({ default: expressions }) => {
      this.data = expressions
      this.expressions.push(...("IntersectionObserver" in window ? this.data.slice(0, this.perPage) : this.data))
      this.totalPages = Math.ceil(this.data.length / this.perPage)
    })
  },
  data() {
    return {
      data: [],
      totalPages: 0,
      perPage: 10,
      expressions: []
    }
  }
}
</script>
