<template>
  <div class="container text-center text-white">
    <h1 class="mt-5">Busquedas...</h1>
    <h3>Información sobre los Juegos</h3>
    <p>La cantidad de juegos es: {{juegosTotal}}</p>
    <p>El stock de juegos total es: {{totalStock}}</p>
  <div class="my-5">
    <label for="buscar">
      Buscar por Código de Producto<input class="form-control" type="text" v-model="busqueda" placeholder="Escriba el código del producto">
    </label>
  </div>
    <h3 class="mt-5">Listado de Juegos Disponibles</h3>
      <table class="table table-dark table-striped">
         <thead>
           <tr>
             <th scope="col">Código</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
             <th scope="col">Precio</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(item, index) in listaJuegos" :key="index" :style="{backgroundColor: item.color}">
             <td>{{item.codigo}}</td>
             <td>{{item.nombre}}</td>
             <td>{{item.stock}}</td>
             <td>{{item.precio}}</td>
             <td><button type="button" class="btn btn-success" @click="agregarCarro(index)">Agregar</button></td>
           </tr>
         </tbody>
      </table>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';


    export default {
        name:'Busqueda',
            data() {
        return {
            busqueda: '',
            codigo: '',
            nombre: '',
            stock: 0,
            precio: 0,
            color: '',
            destacado: false,
        }
      },
      computed: {
        ...mapGetters(['listaJuegos', 'cantidadStock', 'totalStock', 'juegosTotal']),
      },
          watch: {
        busqueda(vNuevo){
            this.$store.dispatch('valorBusqueda',vNuevo);
        }
    },
    methods: {
                destacadoUpdate(index){
            this.$store.dispatch('actualizarDestacado',index);
        },
    },


    
  }
</script>

<style scoped>
* {
  height: auto;
}

</style>