<template>
    <div>
        <h1>Home component</h1>
        <img src="../assets/logo.png" alt="">
    </div>
</template>

<script>
    //ESTO ES CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE CREEMOS SIEMPRE DEBEMOS EXPORTARLO
    //CON UN name
    export default {
        name: "HomeComponent",

}
</script>

<style>
    h1 {color:fuchsia}
    @import './../assets/css/estilo.css'
</style>