<template>
  <main class="home">
    <Expression v-for="(expression, i) in expressions" :key="i" :expression="expression" />
    <Observer v-if="observerVisible" @enter="intersectEnter" />
  </main>
</template>

<script>
import expressions from "@/data/expressions"
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
      if (this.observerVisible) this.expressions.push(expressions[this.expressions.length])
    }
  },
  computed: {
    observerVisible() {
      return this.expressions.length < expressions.length
    }
  },
  data() {
    return {
      expressions: [expressions[0]]
    }
  }
}
</script>
