<template>

    <div class="row">

        <div class="col-4">

            <div class="mb-3">
                <label class="form-label text-white">Descripcion</label>
                <input v-model="descripcion" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Precio</label>
                <input v-model="precio" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Porcentaje de descuento</label>
                <input v-model="descuento" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Categoria</label>
                <input v-model="categoria" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Stock</label>
                <input v-model="stock" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Estado</label>
                <select v-model="estado_producto" class="form-select" aria-label="Default select example">
                    <option selected value="1">Activo</option>
                    <option value="0">Inactivo</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="label-form">Adjuntar Imagen</label>
                <input id= "inp_file" type="file">
            </div>
            
            <button v-if="estado == 0" @click="guardar_catalogo()" class="btn btn-success">Guardar</button>
            <button v-if="estado == 1" @click="actualizar_catalogo()" class="btn btn-primary ms-1">Actualizar</button>
        </div>

        <div class="col-8">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">IMAGEN</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th>% DESCUENTO</th>
                        <th>CATEGORIA</th>
                        <th>STOCK</th>
                        <th>ESTADO</th>
                        <th>ACCIONES</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
                        <td>
                            <img style="width:5rem" :src="catalogo.url" alt="">
                        </td>
                        <td>{{catalogo.descripcion}}</td>
                        <td>{{catalogo.precio}}</td>
                        <td>{{catalogo.descuento}}</td>
                        <td>{{catalogo.categoria}}</td>
                        <td>{{catalogo.stock}}</td>
                        <td>{{catalogo.estado_producto}}</td>

                        <td>
                            <button @click="eliminar_catalogo(catalogo.id)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</button> 
                            <button @click="editar_catalogo(catalogo)" class="btn btn-primary btn-sm ms-1"><i class="fa fa-edit"></i> Edit</button> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>




    </div>
    

</template>

<script>

import {db,storage  } from '@/utils/firebase.js'
import {addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc} from "firebase/firestore"
import {uploadBytes,ref,getDownloadURL} from "firebase/storage"

export default {
    name:'CatalogoAdminForm',
    data(){
        return{
            descripcion:" ",
            precio:" ",
            porcentaje:" ",
            categoria:"",
            stock:" ",
            listar_productos:[],
            lista_catalogo:[],
            id:null,
            estado_producto:1,
            estado:0,
            url:''
        }
    },
    methods:{


        async subir_imagen(){
            const file = document.getElementById("inp_file").files[0]
            //indicar o hacer referencia en que
            //sitio del storage vamos a guardar la imagen
            const referencia = ref(storage,'taller/'+file.name)
            //sube la imagen
            await uploadBytes(referencia,file).then( () => {
            alert('Operación exitosa!')
            })
            this.url = await getDownloadURL(referencia)
        },
        


        async guardar_catalogo()
        {

            await this.subir_imagen()

            const objeto = {
                descripcion:this.descripcion,
                precio:this.precio,
                descuento:this.descuento,
                categoria:this.categoria,
                stock:this.stock,
                estado_producto:this.estado_producto,
                url:this.url
            }
            const coleccion= collection(db,'catalogo')
            addDoc(coleccion, objeto)
            this.vaciar()
        },
        obtenerCatalogo()
        {
            onSnapshot(collection(db,'catalogo'), (snapshot) =>{
                this.lista_catalogo=[]
                snapshot.docs.map( (doc) =>{
                    this.lista_catalogo.push({...doc.data(),id:doc.id})
                } )
            })
        },
        eliminar_catalogo(id)
        {
            deleteDoc(doc(db,'catalogo',id) )
        },
        editar_catalogo(catalogo)
        {
            this.descripcion= catalogo.descripcion;
            this.precio= catalogo.precio;
            this.descuento= catalogo.descuento;
            this.categoria= catalogo.categoria;
            this.stock= catalogo.stock;
            this.id=catalogo.id
            this.estado_producto=catalogo.estado_producto;

            this.estado = 1;

        },
        actualizar_catalogo()
        {
            const datosModificados={
                descripcion:this.descripcion,
                precio:this.precio,
                descuento:this.descuento,
                categoria:this.categoria,
                stock:this.stock,
                estado_producto:this.estado_producto
            }

            updateDoc(doc(db,'catalogo',this.id), datosModificados) 
            this.estado=0
            this.vaciar()
        },
        vaciar()
        {
            this.descripcion=''
            this.precio=''
            this.descuento=''
            this.categoria=''
            this.stock=''
            this.estado_producto = 1;
        }
    },

    mounted()
    {
        this.obtenerCatalogo()
    },

    
}

</script>