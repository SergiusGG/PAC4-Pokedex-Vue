<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';



const tema= ref("light")

const changeTema = (e) =>{
  document.body.className=e.target.value;
  // localStorage.setItem(e.target.value)
  // document.className.add(localStorage.getItem(e.target.value))
 
 localStorage.setItem("tema", e.target.value)
  // localStorage.getItem(e.target.value)=true;
  console.log(e.target.value);
}

// const changeTema = e => document.body.className=e.target.value; ES6

</script>

<template>
  <main class="tema" :class="tema">

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Pokédex_logo.png" width="125" height="125" />
<h1>Pokedex</h1>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/for">For</RouterLink>
        <RouterLink to="/component">Component</RouterLink> -->
        <RouterLink to="/apicomponent">Component API</RouterLink>
        <!-- <RouterLink to="/pokemonsearch">Buscar Pokemon</RouterLink> -->

        <!-- <RouterLink to="/prueba">Prueba</RouterLink> -->






      </nav>
    </div>

    <div class="settings">
      <label for="light">Light</label>
      <label for="dark">Dark</label>
<input type="radio" name="tema" id="light" value="light" v-model="tema" @change="changeTema" checked>
<input type="radio" name="tema" id="dark" value="dark" v-model="tema" @change="changeTema">
<!-- <br>
Tema {{ tema }} -->
    </div>
  </header>

  <RouterView />
</main>

</template>

<style scoped>
.logo{
  width: auto;
}
:root{
  --text-color:#111;
  --bg-color:#eee;
  --bg-card:#ddd;
  --text-card:#333;
}
.tema.dark{
  --bg-color:#252424;
  --text-color:rgba(0, 189, 126, 0.471);
  --bg-card:rgb(157, 215, 196);
  --text-card:#222
}
.tema.light{
  --text-color:#111;
  --bg-color:#eee;
  --bg-card:#ddd;
  --text-card:#333;
}

.tema{
  width: 72vw;
  background-color: var(--bg-color);
  color: var(--text-color);
  /* display: grid; */
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  transition: color 0.3s, background-color 0.3s;

}


/* 
@media (min-width: 1024px) {
  
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .tema {
    /* display: grid; */
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
  .settings{
  display: flex;
}

  header {
    display: grid;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 50%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
text-align: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
