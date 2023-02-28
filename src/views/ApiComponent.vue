<script setup>
import pokeApi from "../services/services.js"
import PokeCard from "../components/PokeCard.vue"
import { ref, onMounted, computed } from "vue";


const pokes =ref([])

const search = ref("")


// function loadPkm(){
//   pokes.value=[]

//   for(let i=1;i<=10; i++){
//     pokeApi.getPkm().then((response) => {
//     console.log(response.data)
//     pokes.value.push(response.data)
    

// })
//   }
//   } 
  
// }

onMounted(()=>{
  for(let i=1;i<=10; i++){
    pokeApi.getPkm().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})
  }
})



const filtroPkm = computed(
  () => {
    return pokes.value.filter((poke) =>{
      return poke.name.toLowerCase().indexOf(search.value.toLocaleLowerCase())===0
    })
  }
)


</script>


<template>
  <div class="new">
    <h1>Pokédex Nacional</h1>
    <!-- <button @click="loadPkm">Cargar Pokémon</button> -->

    <input v-model="search" type="text" placeholder="Buscar pokemon">
   <!-- {{ search }} -->
   <br>
    <section class="cards">
      <PokeCard v-for="pokemons in filtroPkm" :key="pokemons.id" :info="pokemons"
    />
   
</section>
  </div>
</template>

<style>
h1{
    margin: 0 auto;
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
li:hover {
  color: aquamarine;
}
.cards{
  /* padding: 5%; */
  margin: 0 auto;
    display: flex;
    gap: 2rem;
    max-width: 60vw;
    flex-wrap: wrap;
}
</style>
