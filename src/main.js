import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'




//CREACION DE LA APLICACION EN UN VARIABLE
let app = createApp(App)
app.config.globalProperties.$filter={
    //CREAR METODOS QUE RECIBIRAN PARAMETROS Y DEVOLVERAN UN CODIGO
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero*2;
    }
}

app.use(router).mount("#app")
