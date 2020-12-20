<template>
  <section class="single">
    <Expression :expression="expression" />
  </section>
</template>

<script>
import Expression from '@/components/Expression'
import { getExpressionBySlug } from '@/utils/getExpressions'

export default {
  name: 'Single',
  components: {
    Expression
  },
  beforeRouteEnter(to, from, next) {
    const expression = getExpressionBySlug(to.params.slug)
    if (expression) next()
    else next({ name: '404', params: [to.path], replace: true })
  },
  data() {
    return {
      expression: {}
    }
  },
  mounted() {
    this.expression = Object.freeze(getExpressionBySlug(this.$route.params.slug))
    this.$options.title = this.expression.title
    this.$options.description = this.expression.i18n[0].describe
  }
}
</script>
