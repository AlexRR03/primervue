import {createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CineComponent from './components/CineComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import CicloVida from './components/CicloVida.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import PropiedadConmutado from './components/PropiedadConmutado.vue'
import ParImparComponent from './components/ParImparComponent.vue'
import MetodoFilter from './components/MetodoFilter.vue'



const myRoutes = [
    {
        path:"/",component: HomeComponent

    },
    {
        path:"/musica",component: MusicaComponent
    },
    {
        path:"/cine",component:CineComponent
    },
    {
        path:"/cicloVida",component:CicloVida
    },
    {
        path:"/directivas", component:DirectivasComponent
    },
    {
        path:"/propiedadConmutada", component:PropiedadConmutado
    },
    {
        path:"/parImpar", component: ParImparComponent
    },
    {
        path:"/filter", component:MetodoFilter
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router; 