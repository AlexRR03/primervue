<template>
    <div>
        <h1>Propiedad Conmutada</h1>
        <!-- <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego">
                
            </li>
        </ul> -->
        <button @click="getJuegosAzules()">
            Juegos Azules
        </button>
        <div v-html="html">

        </div>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutado",
        methods:{
            getJuegosAzules(){
                this.html = ""
                for (let juego of this.juegos) {
                   this.html+="<h4 style='color:blue' >"+juego+"</h4>"
                }
                
            }
        },
        computed:{
            //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES
            //Y NO PUEDE RECIBIR PARMETROS
            juegosRojos(){
                let datos = this.juegos
                for (let i = 0; i < datos.length; i++) {
                    let juego = datos[i];
                    juego="<span style='color:red'>"+juego+"</span>"
                    datos[i]=juego
                }
                return datos;
            }    
        },
        data(){
            return{
                html:"",
                juegos:["Fifa","COD","Zelda","The Witcher","Sparking Zero","God of war","Red dead Redemption"],
            }
        }
    }
</script>

<style>

</style>