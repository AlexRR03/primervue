<template>
    <div>
        <h1>Mi primera App de Vue, que ilusion!!!</h1>
        <h1>El nombre es: { nombre}</h1>
        <h2>El numero es {numero}</h2>
        <img src="../assets/logo.png" alt="">
    </div>
</template>

<script>
    //ESTO ES CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE CREEMOS SIEMPRE DEBEMOS EXPORTARLO
    //CON UN name
    export default {
        name: "HolaMundo",
        data(){ 
            return { 
        numero:14,
        miArray: [],
        objeto: {},
    }
}
}
</script>

<style>
    h1 {color:fuchsia}
    @import './../assets/css/estilo.css'
</style>