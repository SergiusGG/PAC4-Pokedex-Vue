<script setup>
import pokeApi from "../services/services.js";
import { ref, onMounted } from "vue";
import HomeDetailsBack from "../components/HomeDetailsBack.vue";
import { useRoute } from "vue-router";
import HomePokeCardDetails from "../components/HomePokeCardDetails.vue";

const route = useRoute();

const pokemonsName = route.params.pokemonsName;

console.log(pokemonsName);

const props = defineProps(["pokemonsName"]);

const pokes2 = ref([]);

onMounted(() => {
  console.log("pokemon");
  pokeApi.getOnePkm(pokemonsName).then((response) => {
    console.log(response.data);
    pokes2.value.push(response.data);
    console.log(pokes2.value);
    console.log(props);
  });
});
</script>

<template>
  <div>
    <div class="card">
      <div class="content">
        <HomePokeCardDetails
          class="front"
          v-for="pokemons in pokes2"
          :key="pokemons.id"
          :info="pokemons"
        />

        <HomeDetailsBack
          class="back"
          v-for="pokemons in pokes2"
          :key="pokemons.id"
          :info="pokemons"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 250px;
  text-align: center;
  font-size: 18px;
  text-shadow: 0 0 5px black;
  transition: all 1s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  margin: 0 auto;
}
.card:hover {
  transform: rotateY(0.5turn);
}
.card .content {
  transform-style: preserve-3d;
  transition: all 1s ease;
}

.card .back,
.card .front {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}
.card .back {
  transform: rotateY(0.5turn);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
