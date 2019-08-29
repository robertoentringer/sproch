<template>
  <main class="single">
    <Expression :expression="expression" />
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
    const [expression] = expressions.filter(item => item.slug == to.params.slug)
    next(expression ? vm => (vm.expression = expression) : { name: "404", params: [to.path], replace: true })
  },
  data() {
    return {
      expression: {}
    }
  }
}
</script>
