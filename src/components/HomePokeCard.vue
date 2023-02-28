<script setup>
import { POKEHOME } from '../services/routes';

const props = defineProps(["info"]);
console.log(props.info.name);
</script>

<template>
  <article class="card" :class="props.info.types[0].type.name">
    <h2>Nombre:
       {{ props.info.name }}
    </h2>
    <p>Número pokedex: {{ props.info.id }}</p>
    

    <img :src="props.info.sprites.front_default" alt="">

    <button
      @click="$router.push({ name: POKEHOME, params: { pokemonsName: props.info.name } })"
    >Ver más</button>


  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;
  width: fit-content;
  min-width: 250px;
  max-width: 250px;
  background-color: var(--bg-card);
  color: var(--text-card);
}
.card button{

    margin-top: auto ;
    cursor: pointer;
}

</style>
