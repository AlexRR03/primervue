<template>
  <div>
    <h1>Directivas Vue</h1>

    <h3>{{ $data }}</h3>

    <ol v-if="miArray.length>=0">
        <li v-for="esc in miArray" :key="esc">
            {{ esc }}
        </li>
    </ol>
    <label>Numero:</label>
    <input type="number" v-model="numero"/>
    <h3 v-if="numero>0" style="color:green">Positivo</h3>
    <h3 v-else-if="numero<0" style="color:red">Negativo</h3>
    <h3 v-else style="color:blue">Cero</h3>
  </div>
</template>
<script>
export default {
  name: "DirectivasComponent",
  data(){
    return{
        numero: 0,
        nombre:"Carlos Sainz Jr",
        edad:200,
        miArray:["Ferrrari","Mercedes","Maclaren","RedBull","Williams"]
    }
  }


};
</script>

<style>

</style>
