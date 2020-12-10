import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaJuegos: [
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0002", nombre: "Fifa 21", stock: "100", precio: "25000", color: "blue", destacado: "false" },
      { codigo: "0003", nombre: "God of War 4", stock: "100", precio: "15000", color: "green", destacado: "true" },
      { codigo: "0004", nombre: "Mario Tennis Aces", stock: "100", precio: "35000", color: "yellow", destacado: "false" },
      { codigo: "0005", nombre: "Bloodborne", stock: "100", precio: "10000", color: "blue", destacado: "false" },
      { codigo: "0006", nombre: "Forza Horizon 4", stock: "100", precio: "20000", color: "red", destacado: "true" },
    ],
    subtitulo: 'Juegos de PC',
    titulo: '32 bits',
    busqueda: null
  },
  getters: {
    titulo(state){
      return state.titulo;
    },
    subTitulo(state){
      return state.subtitulo;
    },
    listaJuegos(state){
      return state.listaJuegos.filter(result =>{
        if (state.busqueda) {
          return result.codigo == state.busqueda
        }else {
          return result;
        }
      });
    },
    juegosTotal(state,getters){
      return getters.listaJuegos.length;
    },
    cantidadStock(state,getters){
      return getters.listaJuegos.map(result => parseInt(result.stock))
    },
    totalStock(state,getters){
      return getters.cantidadStock.reduce((acumulado,total)=>{
        return acumulado+total;
      },0);
    },
  },
  mutations: {
    mutandoBusqueda(state,valor){
      state.busqueda = valor;
    },
    mutandoDestacado(state,index){
      state.listaJuegos[index].destacado = !state.listaJuegos[index].destacado;
    },


  },
  actions: {
    valorBusqueda({commit},valor){
      commit('mutandoBusqueda',valor);
    },
    actualizarDestacado({commit},index){
      commit('mutandoDestacado',index);
    },
  },
})
