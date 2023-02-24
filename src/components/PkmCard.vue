<script setup>
const props = defineProps(["info"]);
console.log(props.info);
</script>

<template>
  <article class="card" :class="props.info.type">
    Soy un pokemon
    <h2>Nombre: {{ props.info.name }}</h2>
    <p>Id: {{ props.info.id }}</p>
    <p>Numero: {{ props.info.number }}</p>
    <button
      @click="$router.push({ name: 'single', params: { pokemonsName: props.info.id } })"
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
  box-shadow: 0 0 5px 5 pc #eee;
  width: fit-content;
  min-width: 200px;
  background-color: var(--bg-card);
  color: var(--text-card);
}
.card button{

    margin-top: auto ;
}
.planta{
    box-shadow:0 0  10px 5px green ;
}
.fuego{
    box-shadow:0 0  10px 5px red ;
}
</style>
