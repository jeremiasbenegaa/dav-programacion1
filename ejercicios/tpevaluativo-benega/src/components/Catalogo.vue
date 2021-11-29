<template>
    <div class="row">
        <div v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id" class="col-3 me-1">
            <div class="card text-white bg-warning border-light mb-3" >
             <img :src="catalogo.url" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">{{catalogo.descripcion}}</h5>
                 <h5 class="card-text">{{catalogo.precio}}</h5>
                 <p class="card-text">{{catalogo.estado_producto}}</p>
                 <div class="text-center">
                      <button  class="btn btn-outline-primary">Comprar</button>
                 </div>
                
            </div>
            </div>
        </div>
    </div>
</template>
<script>

import {collection,onSnapshot}from 'firebase/firestore'
import {db} from '../utils/firebase.js'

export default {
    name:'Catalogo',
    data(){
        return{

         lista_catalogo:[],
         
        }
    },

    methods:{
        obtener_catalogo(){
            onSnapshot( collection(db,'catalogo'),(snapshot)=>{
                this.lista_catalogo=[]
                snapshot.docs.map((doc)=>{
                this.lista_catalogo.push({...doc.data(),id:doc.id})
                })
            })
        },
        
    },
    
     mounted(){
        this.obtener_catalogo()
    }
}
</script>
