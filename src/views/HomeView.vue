<script setup>
import {services} from "../hooks/useFetchPkm.js"
import pokeApi from "../services/services.js"
import PokeCard from "../components/PokeCard.vue"
import { ref, onMounted, computed } from "vue";


const pokes =ref([])

const search = ref("")






onMounted(() => {

  for(let i=1;i<=10; i++){
    pokeApi.getListPkm().then((response) => {
    console.log(response.data)
    pokes.value.push(response.data)
    

})
  }
   
})

// const filtroPkm = computed(
//   () => {
//     return pokes.value.filter((poke) =>{
//       return poke.name.toLowerCase().includes(search.value.toLocaleLowerCase())
//     })
//   }
// )


</script>

<template>
  <main>



<h1>Pokedex</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maiores iste debitis fugit perferendis reprehenderit saepe temporibus quibusdam animi doloremque sint, nemo repellat quis quo illo aliquam aliquid nobis praesentium?
  Iure quaerat saepe accusamus magnam excepturi nemo accusantium sint quia magni nostrum, ratione eaque eos tenetur, et repellendus enim reiciendis dolor. Id dicta reiciendis optio eos ducimus autem dignissimos obcaecati?
  Soluta necessitatibus unde dolorem nobis assumenda architecto earum optio! Nihil dignissimos aliquid inventore explicabo ipsum corporis deserunt vero incidunt placeat adipisci esse eligendi rerum saepe quos, ullam, dolor numquam architecto!
  Ad illum eveniet aspernatur distinctio sunt fugit culpa, perspiciatis ipsam assumenda maiores nostrum recusandae debitis amet iure harum magni facere laborum incidunt itaque quae. Voluptates cupiditate error repudiandae non pariatur.
  Totam possimus neque quis dolore quo provident velit, vero dicta. Doloribus blanditiis amet id quasi nihil quae sit! Non alias consequatur quos eveniet, blanditiis dolore molestias animi consectetur pariatur ea!
  Commodi rem magnam itaque laboriosam nihil modi repudiandae est beatae aliquid! Laboriosam odit, blanditiis in, temporibus exercitationem voluptatem dolore impedit veritatis facilis totam numquam eos possimus hic modi atque! Quam?</p>
   

  <div class="new">
    <h1>Pokedex Component</h1>
    <input v-model="search" type="text" placeholder="Buscar pokemon">
   <!-- {{ search }} -->
   <br>
    <section class="cards">
      <PokeCard v-for="pokemons in pokes" :key="pokemons.id" :info="pokemons"
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
  color: aquamarine;
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
