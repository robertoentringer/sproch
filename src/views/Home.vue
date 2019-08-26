<template>
  <main class="home">
    <Expression v-for="(expression, i) in expressions" :key="i" :expression="expression" />
    <Observer v-if="loadMore" @enter="handleEnter">
      <h2>Loading...</h2>
    </Observer>
  </main>
</template>

<script>
import expressions from "../data/expressions"
import Expression from "@/components/Expression"
import Observer from "@/components/Observer"

export default {
  name: "home",
  components: {
    Expression,
    Observer
  },
  methods: {
    handleEnter() {
      if (this.loadMore) this.expressions.push(expressions[this.expressions.length])
    }
  },
  computed: {
    loadMore() {
      return this.expressions.length < expressions.length
    }
  },
  data() {
    return {
      observerVisible: true,
      expressions: [expressions[0]]
    }
  }
}
</script>
