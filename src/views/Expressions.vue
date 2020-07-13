<template>
  <section class="expressions">
    <Expression
      v-for="(item, i) in expressions"
      :key="i"
      ref="items"
      :data-slug="item.slug"
      :expression="item"
    />
  </section>
</template>

<script>
import 'intersection-observer'
import Expression from '@/components/Expression'
import expressions from '@/utils/getExpressions'

export default {
  name: 'Expressions',
  title: 'Expressions',
  description:
    'De Sproch vun der Woch. Le proverbe de la semaine. The weekly expression. Der Spruch der Woche',
  components: { Expression },
  data() {
    return {
      perPage: 10,
      expressions: [],
      page: this.$route.query.page || 1,
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
    this.observer = new IntersectionObserver(this.handleIntersect)
    this.observeLast()
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    observeLast() {
      this.$nextTick(() => {
        this.observer.observe(this.$refs.items[this.loaded - 1].$el)
      })
    },
    handleIntersect(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          this.observer.unobserve(target)
          if (this.loaded < this.total) {
            this.expressions.push(...expressions.slice(this.loaded, this.loaded + this.perPage))
            this.observeLast()
          } else this.observer.disconnect()
        }
      })
    }
  }
}
</script>
