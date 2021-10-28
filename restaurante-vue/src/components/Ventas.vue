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
 
  <button
              @click.prevent="dataVentas(),prueba()"
              class="
                lg:p-4
                bg-gradient-to-r
                from-green-300
                to-blue-400
                hover:from-gray-400 hover:to-gray-800
                text-gray-800
                font-semibold
                lg:m-4
                py-8
                px-4
                border border-gray-600
                rounded
                shadow-2x1
              "
            >
              GRACIAS 
            </button>
  
  </div>
  
</template>

<script>
import axios from "axios";
import MetodosService from "../services/metodos.js";
import ProductoService from "../services/productos.js";
export default {
  mounted() {
    MetodosService.metodoUno().then((respuesta)=>{
          this.compras=respuesta.data;
      }).catch((error)=>{
          console.log("Error Compras",error);
      });
      
      MetodosService.metodoUno().then((respuesta)=>{
          this.lProductos=respuesta.data;
      }).catch((error)=>{
          console.log("Error Compras",error);
      });

      
    
  },
  data() {
    return {
     envio:{
        fecha:'',
        hora:'',
        tipoPago:'',
        direccion:'',
        ciudad:'',
        localidad:'',
        telefono:'',
        compra_id:0
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
      },
      compras:{},
      envios:{},
      producto:[],
      lProductos:[]
    };
  },
  methods: {
    dataVentas(){
      this.compra = this.compras[this.compras.length-1];
      let idcompra = this.compras[this.compras.length-1].id;
      
      axios
        .get(`http://localhost:8080/envio/cliente/${idcompra}` )
        .then(response => (this.envios = response.data));

    },
    prueba(){
      
      this.envio.fecha = this.envios[0].fecha ;
      this.envio.hora =this.envios[0].hora ;
      this.envio.tipoPago = this.envios[0].tipoPago ;
      this.envio.direccion =this.envios[0].direccion ;
      this.envio.ciudad =this.envios[0].ciudad ;
      this.envio.localidad =this.envios[0].localidad ;
      this.envio.telefono =this.envios[0].telefono ;
      this.envio.compra_id = this.envios[0].compra_id ;

      let arr = this.compra.listaProductos.split(' ');
      
      for (var j = 0; j < arr.length-1; j++) {
        this.producto.push(arr[j]);
        //return(arr[j]);
      }
      this.otroMas(); 
    },

    otroMas(){
      for (var j = 0; j < this.lProductos; j++) {
        console.log(this.lProductos[j])
      }
      /*
      let subtotal = '';
      for (var j = 0; j < this.lProductos; j++) {
        for (var i = 0; i < this.producto.length; i++) {
          if (this.lProductos[j].id == this.producto[i]) {
            subtotal += this.info[j].nombre + ' ';
          }
        }
      }
      console.log(subtotal);
      */
    }


    
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