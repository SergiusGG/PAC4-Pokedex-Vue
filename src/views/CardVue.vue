<script setup>
import pokeApi from "../services/services.js"
import { ref, onMounted } from "vue";
import PokeCard from "../components/PokeCard.vue";


import { useRoute } from 'vue-router';
import PokeCardDetails from "../components/PokeCardDetails.vue";

const route=useRoute()

const pokemonsName=route.params.pokemonsName

console.log(pokemonsName);


const props = defineProps(["pokemonsName"])




const pokes2 =ref([])

onMounted(() => {
    console.log("pokemon");
    pokeApi.getOnePkm(pokemonsName).then((response) => {
    console.log(response.data)
    pokes2.value.push(response.data)
console.log(pokes2.value);
console.log(props);
})
})
</script>


<template>
<div class="new">
    <h1>Pokemon individual</h1>

    <PokeCardDetails v-for="pokemons in pokes2" :key="pokemons.id" :info="pokemons"
    />

    
</div>

</template>


<style>
.new{
    display: grid;
}
</style>