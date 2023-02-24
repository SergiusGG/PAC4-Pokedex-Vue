<script setup>
import PkmCard from '../components/PkmCard.vue'; 


const pkm = [
  { id: 1, name: "Bulbasaur", number: 1, type:"planta" },
  { id: 2, name: "Ivysaur", number: 2, type:"planta" },
  { id: 3, name: "Venusaur", number: 3, type:"planta" },
  { id: 4, name: "Charmander", number: 4, type:"fuego" },
];
</script>

<template>
  <div class="new">
    <h1>Pokedex Component</h1>
   <section class="card">

    <PkmCard v-for="pokemon in pkm" :key="pokemon.id" :info="pokemon"/>
</section>
  </div>
</template>

<style>
.new {
  display: grid;
}
li {
  cursor: pointer;
}
li:hover {
  color: aquamarine;
}
.card{
    display: flex;
    gap: 2rem;
}
</style>
