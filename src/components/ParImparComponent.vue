<template>
    <div>
        <label>Numero:</label>
        <input type="number" v-model="numero">
        <h3 style="color:blue" v-if="numero%2==0">Par</h3>
        <h3 style="color:blue" v-if="numero%2!=0">Impar</h3>
        <div v-html="html"></div>
        <button @click="getEvaluarNumeros()">Evaluar</button>
        <div evaluarNumero></div>
    </div>
</template>
<script>
    export default{
        name:"ParImparComponent",
         methods:{
            getEvaluarNumeros(){
                this.html = ""
                if (this.numero %2 == 0) {
                    this.html += "<h3>Par:"+this.numero+"</h3>"
                }else{
                    this.html += "<h3>Impar:"+this.numero+"</h3>"
                }
            }
         },
        computed:{
            evaluarNumero(){
                let datos = ""
                if(this.numero%2 == 0){
                    datos="<h2>Par:"+this.numero+"</h2>"
                }else{
                    datos="<h2>Impar:"+this.numero+"</h2>"
                }
               return datos;
            }
        },
        data(){
            return{ 
                html:"",
                numero:0
                
            }
        }
    }
</script>