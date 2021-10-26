<template>
  <div
    class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
  >
  <div class="grid grid-rows-3 grid-flow-col gap-4">
    
    <!--Grid1-->
    <div class="row-span-3 ...">
      <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Ciudad
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.ciudad" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Id Compra 
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.compra_id" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Direccion
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.direccion" type="text">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Fecha
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.fecha" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Hora
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.hora" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Localidad
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.localidad" type="text">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Telefono
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.telefono" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Tipo de pago
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="envio.tipoPago" type="text">
    </div>
      
  </form>
  
      </div>
    </div>

    <!--Grid2-->
    <div class="row-span-2 col-span-2 ...">

      <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Cantidad de productos
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="compra.cantidad" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Id cliente
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="compra.cliente" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Descuento
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="compra.descuento" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Lista de productos
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="compra.listaProductos" type="text" >
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Valor total
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="compra.total" type="text" >
    </div>

    
      
  </form>
  
      </div>

    </div>   

    <!--Grid3-->
    <div class="col-span-2 ...">

       <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Nombre de producto
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="producto.nombre" type="text" >
    </div>
  
  </form>
  
        </div>

    </div>

  </div>
  {{compra.listaProductos}}
  <button @click.prevent="prueba()">hola </button>
  </div>
  
</template>

<script>
import ClienteService from "@/services/clientes.js";
import axios from "axios";
export default {
  mounted() {
    //let idCompra = this.envio.compra_id;
    //this.cliente = ClienteService.registrarCliente();
    axios
        .get('http://localhost:8080/envio/12' )
        .then(response => (this.envio = response.data));
     axios
        .get(`http://localhost:8080/compra/4`)
        .then(response => (this.compra = response.data));
     //this.traerCompra();
     axios.get('http://localhost:8080/producto/19')
        .then(response => (this.producto = response.data));
     
//    this.variable();    
  },
  data() {
    return {
      envio:{
        ciudad:'',
        compra_id:0,
        direccion:'',
        fecha:'',
        hora:'',
        localidad:'',
        telefono:'',
        tipoPago:''
      },
      compra:{
        cantidad:'',
        cliente:'',
        descuento:'',
        listaProductos:{},
        total:''
      },
      producto:{
        nombre:''
      }
    };
  },
  methods: {
    
    traerCompra(){
      let idCompra = this.envio.compra_id;
      axios
        .get(`http://localhost:8080/compra/${idCompra}`)
        .then(response => (this.compra = response.data));
    },
    traerEnvio(){
      axios
        .get('http://localhost:8080/todos/envio/' )
        .then(response => (this.envio = response.data));
    },
    prueba(){
      let arr = this.compra.listaProductos.split(' ');
      
      for (var j = 0; j < arr.length-1; j++) {
        return(arr[j]);
      }
    }
    //var eje= this.info[this.info.length-1].id;
  },
};
</script>
<style  scoped>
h2{
   font-size: 3rem;
  font-style: initial;
  color: red;
}
</style>