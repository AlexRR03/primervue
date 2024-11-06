<template>
  <div>
    <h1>Ciclo de vida</h1>
    <h2>{{ saludo }}</h2>
    <button @click="cambiarSaludo()">
        Cambiar titulo
    </button>
    <hr>
    <img src="../assets/logo.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "CicloVida",
  data() {
    return {
      saludo: "Hola",
    };
  },
  methods: {
    cambiarSaludo() {
      this.saludo = "20 Segundazos pa verstappen";
    },
  },
  unmountued() {
    console.log("Componente desmontado");
  },
  mounted() {
    console.log("Componente montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  created() {
    console.log("Componente creado");
  },
};
</script>
<style></style>
