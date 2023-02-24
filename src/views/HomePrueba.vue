 <!-- <script setup>
import { ref, onMounted } from 'vue';
import PokeCardOrdenada from '../components/PokeCardOrdenada.vue';
import {services} from "../hooks/useFetchPkm.js"

// const arrayPkm=ref([])


// const fetchData= async function fetchData(){
//   for(let i=1;i<=5; i++){
//   await services.getPkmsApi().then((response) => {
//     console.log(response.data)
//     arrayPkm.value.push(response.data)
//   }
// )
// const fetchData= async function fetchData(){
//   for(let i=1;i<=5; i++){
//   await services.getPkmsApi().then((response) => {
//     console.log(response.data)
//     arrayPkm.value.push(response.data)
//   }
// )

// }}
// console.log(arrayPkm.value);
// onMounted(async ()=>{
//     arrayPkm.value=  await services.getPkmsApi()

//     console.log(arrayPkm.value);
// })

// pokeApi.getPkm().then((response) => console.log(response.data))
// onMounted(async () => {
  // fetchData()

  // fetchData()
    // arrayPkm.value=  await services.getPkmsApi()

  // let values =+prompt("Introduce numero pokemons");

  // for(let i=1;i<=5; i++){
  //    await services.getPkmsApi().then((response) => {
  //   console.log(response.data)
  //   arrayPkm.value.push(response.data)
    

    // pokes.value.push(response.data)
    // console.log(pokes.value);
// })
  // }
   
// })

// const handleUpdateKeyword= function handleUpdateKeyword(word){
// // console.log("palabra desde el padre", word);
// fetchData(word)
// }
 </script>

<template>
  <main>
        <PokeCardOrdenada/>
  <button></button>
  </main>
</template> --> 



<script setup>
// import PkmCard from '../components/PkmCard.vue'; 
import pokeApi from "../services/services.js"
import PokeCard from "../components/PokeCard.vue"
import { ref, onMounted, computed } from "vue";
// import { ref, onMounted } from 'vue';
import PokeCardOrdenada from '../components/PokeCardOrdenada.vue';
import {services} from "../hooks/useFetchPkm.js"


// const pkm = [
//   { id: 1, name: "Bulbasaur", number: 1, type:"planta" },
//   { id: 2, name: "Ivysaur", number: 2, type:"planta" },
//   { id: 3, name: "Venusaur", number: 3, type:"planta" },
//   { id: 4, name: "Charmander", number: 4, type:"fuego" },
// ];

// const pokes =ref([])

// const search = ref("")

// // pokeApi.getPkm().then((response) => console.log(response.data))





// onMounted(() => {

//   for(let i=1;i<=10; i++){
//     pokeApi.getPkm().then((response) => {
//     console.log(response.data)
//     pokes.value.push(response.data)
    

//     // pokes.value.push(response.data)
//     // console.log(pokes.value);
// })
//   }
   
// })

// const filtroPkm = computed(
//   () => {
//     return pokes.value.filter((poke) =>{
//       return poke.name.toLowerCase().includes(search.value.toLocaleLowerCase())
//     })
//   }
// )


</script>


<template>
  <!-- <div class="new">
    <h1>Pokedex Component</h1>
    <input v-model="search" type="text" placeholder="Buscar pokemon">
   {{ search }}
   <br>
    <section class="cards">
      <PokeCardOrdenada v-for="pokemons in filtroPkm" :key="pokemons.id" :info="pokemons" -->
    />
    <!-- <PokeCard v-for="pokemons in pokes" :key="pokemons.id" :info="pokemons"
    /> -->
    <!--  -->

    <!-- <PkmCard v-for="pokemon in pkm" :key="pokemon.id" :info="pokemon"/> -->
<!-- </section>
  </div> -->
</template>

<!-- HACER UNA HOME CON LOS POKEMON ORDENADOS  -->