<template>
  <section class="about">
    <h1>De Sproch vun der Woch</h1>
    <h2>Le proverbe de la semaine</h2>
    <h3>The weekly expression</h3>
    <h3>Der Spruch der Woche</h3>
    <p>
      Les expressions reproduites sur ce site ont étés origilamente publiés sur le
      <a
        title="Portail officiel du Grand-Duché de Luxembourg"
        href="http://luxembourg.public.lu"
        target="_blank"
        rel="noopener noreferrer"
        >portail officiel du Grand-Duché de Luxembourg</a
      >
      et disponibilisées ici avec l'autorisation préable de son editor.
    </p>
    <p>
      <a
        title="Portail officiel du Grand-Duché de Luxembourg"
        href="http://luxembourg.public.lu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/luxembourg.png" alt="logo-portail-grand-duche-du-luxembourg" />
      </a>
    </p>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.about {
  h3 {
    &:last-of-type {
      margin-top: 0;
    }
    &:first-of-type {
      margin-bottom: 0;
    }
  }
  img {
    background-color: $bg-light;
    margin-top: 1rem;
    padding: 10px;
    border-radius: 2px;
  }
}
</style>
