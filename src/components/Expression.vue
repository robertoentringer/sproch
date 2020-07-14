<template>
  <article class="expression">
    <div class="block">
      <router-link
        v-if="expression.slug"
        :to="{ name: 'single', params: { slug: expression.slug } }"
      >
        <img
          v-if="expression.img"
          width="320"
          height="240"
          loading="eager"
          :alt="expression.img"
          :src="img"
        />
      </router-link>
      <audio v-if="expression.audio" preload="none" controls :src="audio" />
      <p class="source">
        Source: Service information et presse du gouvernement /
        <a
          title="Service information et presse du gouvernement"
          href="http://luxembourg.lu"
          target="_blank"
          rel="noopener noreferrer"
          >Luxembourg.lu</a
        >
      </p>
    </div>
    <div class="block">
      <h1 class="title">{{ expression.title }}</h1>
      <div v-for="traduction in expression.i18n" :key="traduction.lang">
        <h3 class="title">
          <span class="lang">{{ traduction.lang.toUpperCase() }}</span>
          <span class="text">{{ traduction.title }}</span>
        </h3>
        <p>{{ traduction.describe }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Expression',
  props: {
    expression: {
      type: Object,
      required: true
    }
  },
  computed: {
    audio() {
      return require(`audio/${this.expression.audio}`)
    },
    img() {
      return require(`img/${this.expression.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.expression {
  display: flex;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &:not(:last-child) {
    margin-bottom: $spaces;
  }
  .source {
    font-style: italic;
    font-size: 0.75em;
    margin-bottom: 0;
    a {
      color: inherit;
    }
  }
  .title {
    overflow-wrap: break-word;
    hyphens: auto;
    .lang {
      background: #fff;
      padding: 0 0.4em;
      font-size: 0.85em;
      margin-right: 0.4em;
    }
  }
  .block {
    flex: 1;
    & a + audio {
      margin-top: 1rem;
    }
    &:first-of-type {
      background-color: $color-secondary;
      padding: 1rem;
      flex-direction: column;
      max-width: 30%;
    }
    &:first-of-type img {
      width: 100%;
      height: auto;
    }
    &:first-of-type audio {
      display: flex;
      width: 100%;
    }
    &:last-of-type {
      background-color: $color-tertiary;
      padding: 1.5rem;
      color: $text-dark;
      display: flex;
      flex-direction: column;
    }
  }
}
@media only screen and (max-width: 768px) {
  .expression,
  .expression:nth-child(even) {
    flex-direction: column;
  }
  .expression .block:first-of-type {
    max-width: inherit;
  }
}
</style>
