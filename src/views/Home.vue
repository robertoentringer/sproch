<template>
  <main class="home">
    <Expression v-for="(expression, i) in expressions" :key="i" :expression="expression" />
    <Observer v-if="observerVisible" @enter="intersectEnter" />
  </main>
</template>

<script>
import Expression from "@/components/Expression"
import Observer from "@/components/Observer"

export default {
  name: "home",
  components: {
    Expression,
    Observer
  },
  methods: {
    intersectEnter() {
      if (this.observerVisible) this.expressions.push(this.data[this.expressions.length])
    }
  },
  computed: {
    observerVisible() {
      return this.expressions.length < this.data.length
    }
  },
  async created() {
    import(/* webpackChunkName: "expressions" */ "@/data/expressions").then(({ default: expressions }) => {
      this.data = expressions
      this.expressions.push(...("IntersectionObserver" in window ? [expressions[0]] : expressions))
    })
  },
  data() {
    return {
      data: [],
      expressions: []
    }
  }
}
</script>
