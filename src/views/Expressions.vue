<template>
  <section>
    <Expression
      v-for="(item, i) in expressions"
      :id="item.slug"
      :key="i"
      :data-slug="item.slug"
      :data-page="dataPage(i)"
      :expression="item"
    />
  </section>
</template>

<script>
import Expression from "@/components/Expression"
import { getExpressionsFirsts } from "@/utils/getExpressions"

const expressions = getExpressionsFirsts(20)

export default {
  name: "Expressions",
  title: "Expressions Page",
  description: "Description Expressions Page...",
  components: { Expression },
  data() {
    return {
      perPage: 4,
      expressions: [],
      page: parseInt(this.$route.query.page) || 1,
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
    this.$nextTick(() => {
      //this.$refs.items[7].$el.scrollIntoView()
      const el = document.getElementById("keiseker")
      el.style.border = "10px solid red"
      el.scrollIntoView({
        behavior: "smooth"
      })
      //el.parentNode.removeChild(el)
      console.log(el)
      /* window.scrollTo({
        top: this.$refs.items[7].$el.getBoundingClientRect().top + window.pageYOffset
      }) */
    })
    //const page = this.$route.query.page
    //this.observer = new IntersectionObserver(this.intersect)
    //this.$refs.items[0].$el.scrollIntoView()
    //this.$refs.items.forEach(({ $el }) => {
    //console.log($el.dataset.page)
    //if ($el.dataset.page === page) $el.scrollIntoView()
    //this.observer.observe($el)
    //})
    //this.intersectionObserverEntries = this.observer.takeRecords()
    //if (this.$route.query.page) this.$router.push({ hash: `#page-${this.$route.query.page}` })
  } /* ,
  destroyed() {
    this.observer.disconnect()
  }, */,
  methods: {
    dataPage(i) {
      return ++i % this.perPage === 0 ? Math.ceil(i / this.perPage + 1) : null
    },
    conditionalRef(i) {
      return this.dataPage(i) ? "items" : null
    } /* ,
    intersect(entries, observer) {
      entries.forEach(({ target, isIntersecting }) => {
        //console.log(target.getBoundingClientRect().top + window.pageYOffset)
        const slug = target.dataset.slug
        const pageData = parseInt(target.dataset.page)
        const pageUrl = parseInt(this.$route.query.page)
        //console.log(slug, ", data:", pageData, ", url:", pageUrl, ", intersection:", isIntersecting)
        //if (isIntersecting && pageUrl !== pageData) this.$router.push({ query: { page: pageData } })
      })
    } */
  }
}
</script>
