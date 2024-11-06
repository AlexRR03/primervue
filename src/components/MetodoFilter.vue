<template>
    <div>
        <h1>Metodo Filter</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numero: {{ num }},
                Doble {{ $filter.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul>
            <li v-for="nom in nombres" :key="nom">
                Nombre: {{ nom }},
                Nombre Mayus : {{ $filter.mayuscula(nom) }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"MetodoFilter",
    data(){
        return { 
        numeros : [2,5,8,69,115,551,404],
        nombres: ["El bicho","La pulga","El pajarito","El comandante","El jefecito","El tiburon"]
    }

}
}

</script>