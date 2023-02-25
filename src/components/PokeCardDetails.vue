<script setup>
import { POKE } from '../services/routes';

const props = defineProps(["info"]);
console.log(props.info.name);
</script>

<template>
  <article class="card" :class="props.info.types[0].type.name">
    Soy un pokemon
    <h2>Nombre:
       {{ props.info.name }}
    </h2>
    <p>Número pokedex: {{ props.info.id }}</p>
    <img :src="props.info.sprites.front_default" alt="">
    <p>Tipo: {{ props.info.types[0].type.name }}</p>
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
.water{
  box-shadow:0 0  10px 5px blue;
}
.ground{
  box-shadow:0 0  10px 5px brown;

}
.electric{
  box-shadow:0 0  10px 5px yellow;

}
.fire{
  box-shadow:0 0  10px 5px red;

}
.grass{
  box-shadow:0 0  10px 5px green;

}
.dragon{
  box-shadow:0 0  10px 5px purple;

}
.fairy{
  box-shadow:0 0  10px 5px pink;

}
.steel{
  box-shadow:0 0  10px 5px rgb(83, 82, 82);

}
.normal{
  box-shadow:0 0  10px 5px rgba(255, 255, 255, 0.855);

}
.rock{
  box-shadow:0 0  10px 5px burlywood;

}
.poison{
  box-shadow:0 0  10px 5px rgb(42, 1, 42);

}
.bug{
  box-shadow:0 0  10px 5px rgb(117, 186, 5);

}
.ghost{
  box-shadow:0 0  10px 5px rgb(45, 21, 47);

}
.dark{
  box-shadow:0 0  10px 5px rgb(0, 0, 0);

}
.psychic{
  box-shadow:0 0  10px 5px rgb(179, 39, 123);

}
.fighting{
  box-shadow:0 0  10px 5px rgb(255, 93, 6);

}
.ice{
  box-shadow:0 0  10px 5px rgb(9, 169, 205);

}
</style>
