<template>
  <main class="single">
    <Expression :id="id" :expression="expression" />
  </main>
</template>

<script>
import Expression from "@/components/Expression"
import expressions from "@/utils/getExpressions"

export default {
  name: "Single",
  components: {
    Expression
  },
  beforeRouteEnter(to, from, next) {
    next(expressions[to.params.id] ? {} : { name: "404", params: [to.path], replace: true })
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id)
    },
    expression() {
      return expressions[this.id]
    }
  }
}
</script>
