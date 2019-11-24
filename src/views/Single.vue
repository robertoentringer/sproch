<template>
  <section class="single">
    <Expression :expression="expression" />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import { getExpressionBySlug } from "@/utils/getExpressions"

export default {
  name: "Single",
  title: "Single Expression Page",
  description: "Description Single Expression Page...",
  components: {
    Expression
  },
  beforeRouteEnter(to, from, next) {
    const expression = Object.freeze(getExpressionBySlug(to.params.slug))
    next(
      expression
        ? vm => (vm.expression = expression)
        : { name: "404", params: [to.path], replace: true }
    )
  },
  data() {
    return {
      expression: {}
    }
  }
}
</script>
