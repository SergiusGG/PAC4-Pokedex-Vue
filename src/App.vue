<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { storage } from "./hooks/useTheme";

const tema = ref();
const changeTema = (e) => {
  tema.value = e.target.value;
  document.body.className = e.target.value;
  storage.set("tema", tema.value);
};

onMounted(() => {
  tema.value = storage.get("tema");
  if (!tema.value) {
    storage.set("tema", "light");
  }
});
</script>

<template>
  <main class="tema" :class="tema">
    <header>
      <RouterLink class="routerHeader" to="/">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/Pokédex_logo.png"
          width="125"
          height="125"
        />
      </RouterLink>

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Inicio</RouterLink>

          <RouterLink to="/apicomponent">Pokédex Nacional</RouterLink>
        </nav>
      </div>

      <div class="settings">
        <div>
          <label class="pointer" for="light">Claro</label>
          <input
            class="pointer"
            type="radio"
            name="tema"
            id="light"
            value="light"
            v-model="tema"
            @change="changeTema"
            checked
          />
        </div>
        <div>
          <label class="pointer" for="dark">Oscuro</label>
          <input
            class="pointer"
            type="radio"
            name="tema"
            id="dark"
            value="dark"
            v-model="tema"
            @change="changeTema"
          />
        </div>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
.routerHeader:hover {
  background-color: transparent;
}
.logo {
  width: auto;
}
:root {
  --text-color: #111;
  --bg-color: #eee;
  --bg-card: #ddd;
  --text-card: #333;
}
.tema.dark {
  --bg-color: #252424;
  --text-color: rgba(0, 189, 126, 0.471);
  --bg-card: rgb(157, 215, 196);
  --text-card: #222;
}
.tema.light {
  --text-color: #111;
  --bg-color: #eee;
  --bg-card: #ddd;
  --text-card: #333;
}

.tema {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  transition: color 0.3s, background-color 0.3s;
}

.settings {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

header {
  display: grid;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  line-height: 1.5;
  max-height: 100vh;
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
    grid-template-columns: 1fr 1fr;
  }

  .pointer {
    cursor: pointer;
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
