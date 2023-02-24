<template>

    <section id="cards1" class="cards1"></section>
    
        <template id="template">
            <article id="" class="card">
                <img src="" alt="pokemon">
                <p class="numero"></p>
                <p class="name"></p>
                <p class="attack"></p>
                <p class="defense"></p>
               
                   <button   id="" class="info" onclick="display(id)"></button>
               
    
    
            </article>
        </template>
    </template>

<script setup>
function fetchPokemons(){
  let values =+prompt("Introduce numero pokemons");
  for(let i=1;i<=values; i++){
      fetchPokemon(i);
  }
}
function fetchPokemon(){
  let url=`https://pokeapi.co/api/v2/pokemon/`;
let random = Math.round(Math.random()*1279);
let urlDef= url + random;
  fetch(urlDef)
  .then(res=>res.json())
  .then(pokemon=>

    createPokemon(pokemon)
 

    )
}
function createPokemon(pokemon){
const out =document.querySelector("#cards1");
const temp=document.getElementById("template");
const clonedTemplate=temp.content.cloneNode(true);


let card=clonedTemplate.querySelector(".card");
let sprite=clonedTemplate.querySelector("img");
let number=clonedTemplate.querySelector(".numero");
let name=clonedTemplate.querySelector(".name");
let showInfo=clonedTemplate.querySelector(".info");



// card.setAttribute("id", `#${pokemon.id.toString().padStart(3,0)}` );
// sprite.setAttribute("src", pokemon.sprites.front_default );
number=`#${pokemon.id.toString().padStart(3,0)}`;
name=pokemon.name;

showInfo.setAttribute("id", pokemon.id );

showInfo.textContent="Saber más";

out.appendChild(clonedTemplate);

}


fetchPokemons();


</script>




<style scoped>


</style>