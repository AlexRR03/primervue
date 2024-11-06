<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/cine">Cine</router-link>
      </li>
      <li>
        <router-link to="/musica">Musica</router-link>
      </li>
      <li>
        <router-link to="/cicloVida">Ciclo de vida</router-link>
      </li>
      
      <li>
        <router-link to="/directivas">Directivas</router-link>
      </li>
      <li>
        <router-link to="/propiedadConmutada">Propiedad</router-link>
      </li>
      <li>
        <router-link to="/parImpar">Par o Impar </router-link>
      </li>
      <li>
        <router-link to="/filter">Metodo Filter </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
  margin: 10px;
}
</style>
