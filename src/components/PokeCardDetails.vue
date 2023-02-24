<script setup>
import { POKE } from '../services/routes';

const props = defineProps(["info"]);
console.log(props.info.name);
</script>

<template>
  <article class="card">
    Soy un pokemon
    <h2>Nombre:
       {{ props.info.name }}
    </h2>
    <p>Número pokedex: {{ props.info.id }}</p>
    <img :src="props.info.sprites.front_default" alt="">
    <p>Defensa física: {{ props.info.stats[2].base_stat }}</p>
    <button>  <RouterLink to="/apicomponent">Volver</RouterLink></button>

   
  </article>
</template>

<style scoped>
h1{
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
}

</style>
