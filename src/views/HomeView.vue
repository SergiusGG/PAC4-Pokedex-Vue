<script setup>
import pokeApi from "../services/services.js"
import HomePokeCard from "../components/HomePokeCard.vue"
import { ref, onMounted } from "vue";


const pokes =ref([])







onMounted(() => {

    pokeApi.getBulbasaur().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})

pokeApi.getChar().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})
pokeApi.getSqrt().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})  

pokeApi.getPika().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})
  
   
})



</script>

<template>
  <main class="container">



<h1>Benvenido a la Pókedex</h1>
<p>Todo comenzó en el año 1996 en Japón. Ese año se lanzaron las ediciones Rojo y Verde. Posteriormente se lanzó una edición especial llamada Azul.
  En 1998 se lanzaron las ediciones Azul y Rojo en occidente y ese mismo año llegaría a Japón la edición Amarilla, que en occidente se puso a la venta en 1999.
  Esto fue el incio del fenómeno Pokemon que aún a día de hoy sigue siendo la franquicia más popular.
  Varias generaciones crecimos con estos pequeños monstruos pero nada sería lo mismo sin los pokémon más icónicos de todos:
  <ul>
    <li>Pikachu</li>
    <li>Charmander</li>
    <li>Squirtle</li>
    <li>Y sobre todo, Bulbasaur</li>
  </ul>
  En esta página de inicio se muestra la información detallada de estos pokémon.
  <br>

  Además, en la pestaña de Pokédex Nacional puedes introducir un número mediante un prompt para que se muestre una lista con pokémon aleatorios.
  También puedes utilizar el buscador para encontrar un pokémon que se encuentre en esa lista y al clicar en la tarjeta se mostrarán datos adicionales con una tarjeta que se voltea al pasar el ratón por encima.
Estas tarjetas incluyen información como el nombre del pokémon, su número en la pokédex nacional, su sprite, sus stats y tienen un sombreado que coincide con su tipo (o su primer tipo en caso de tener más de uno)
  
<br>

  Por último, se encuentra un modo oscuro para que puedas seleccionar el tono de visualización más adecuado.
</p>
   

  <div class="new">
    
    <section class="cards">
      <HomePokeCard v-for="pokemons in pokes" :key="pokemons.id" :info="pokemons"
    />
    </section>
    </div>
</main>
</template>

<style>
.new {
  display: grid;
}
li {
  cursor: pointer;
}
li:hover {
  color: black;
}
.card{
    display: flex;
    gap: 2rem;
}
input{
  width: 30%;
    margin: 0 auto;
}
.new {
  display: grid;
}
li {
  cursor: pointer;
}
/* li:hover {
  color: aquamarine;
} */
.cards{
  /* padding: 5%; */
  margin: 0 auto;
    display: flex;
    gap: 2rem;
    max-width: 60vw;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.container{
  padding: 5%;
    gap: 5%;
    display: grid;
}
h1{
  text-align: center;
}
</style>
