<template>
  <div class="form">
    <iframe src="https://forms.gle/6uNvrMZYLhK4bUBT7" frameborder="0" loading="eager"></iframe>
  </div>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style lang="scss">
#app.contact-page {
  main {
    height: 100vh;
    section {
      min-height: 100%;
    }
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
.form {
  width: 100%;
  height: 100vh;
  position: relative;
  iframe {
    width: 100%;
    height: 80%;
  }
}
</style>
