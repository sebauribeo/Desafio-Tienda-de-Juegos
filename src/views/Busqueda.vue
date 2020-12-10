<template>
        <div class="container text-center text-white">
        <h1 class="mt-5">Busquedas...</h1>
        <h3>Información sobre los Juegos</h3>
        <p>La cantidad de juegos registrados es: {{juegosTotal}}</p>
        <p>La cantidad de stock de juegos total es: {{totalStock}}</p>
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
      <th scope="col">Destacado</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in listaJuegos" :key="index" :style="{backgroundColor: item.color}">
      <td>{{item.codigo}}</td>
      <td>{{item.nombre}}</td>
      <td>{{item.stock}}</td>
      <td>{{item.precio}}</td>
      <td>{{item.destacado}}</td>
    </tr>
  </tbody>
</table>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agregando Juego</h5>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="codigo" class="form-label">Código</label>
                                        <input type="text" class="form-control" v-model="codigo">
                                    </div>
                                    <div class="mb-3">
                                        <label for="nombre" class="form-label">Nombre</label>
                                        <input type="text" class="form-control" v-model="nombre">
                                    </div>
                                    <div class="mb-3">
                                        <label for="stock" class="form-label">Stock</label>
                                        <input type="text" class="form-control" v-model="stock">
                                    </div>
                                    <div class="mb-3">
                                        <label for="precio" class="form-label">Precio</label>
                                        <input type="text" class="form-control" v-model="precio">
                                    </div>
                                    <div class="mb-3">
                                        <label for="color" class="form-label">Color</label>
                                        <input type="color" class="form-control" v-model="color">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" v-model="destacado">
                                        <label class="form-check-label" for="exampleCheck1">Check me</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="guardarNuevo">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
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


    
  }
</script>

<style scoped>
* {
  height: auto;
}

</style>