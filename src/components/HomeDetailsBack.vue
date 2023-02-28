<script setup>
const props = defineProps(["info"]);
console.log(props.info.name);
</script>

<template>
  <article class="card" :class="props.info.types[0].type.name">
    <h2>
      Nombre:
      {{ props.info.name }}
    </h2>
    <p>Número pokédex: {{ props.info.id }}</p>
    <img :src="props.info.sprites.back_default" alt="" />
    <p v-if="props.info.types.length >= 2">
      Tipo 1: {{ props.info.types[0].type.name }}
      <br />
      Tipo 2: {{ props.info.types[1].type.name }}
    </p>
    <p v-else-if="props.info.types.length == 1">
      Tipo: {{ props.info.types[0].type.name }}
    </p>
    <p>HP: {{ props.info.stats[0].base_stat }}</p>
    <p>Ataque físico: {{ props.info.stats[1].base_stat }}</p>
    <p>Defensa física: {{ props.info.stats[2].base_stat }}</p>
    <p>Ataque especial: {{ props.info.stats[3].base_stat }}</p>
    <p>Defensa especial: {{ props.info.stats[4].base_stat }}</p>
    <p>Velocidad: {{ props.info.stats[5].base_stat }}</p>
    <button><RouterLink to="/">Volver</RouterLink></button>
  </article>
</template>

<style scoped>
h1 {
  margin: 0 auto;
}
.card {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 5px 5 pc #eee;
  width: fit-content;
  min-width: 250px;
  max-width: 250px;
  background-color: var(--bg-card);
  color: var(--text-card);
  /* height: fit-content; */
}
</style>
