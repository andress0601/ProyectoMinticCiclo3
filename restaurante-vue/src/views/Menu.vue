
<template>
<div>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="https://crustier-twists.000webhostapp.com/imagenes/sopa.png"
      type="image/x-icon"
    />


    <!--class=" bg-gray-800"
      
    <div><img class=" object-left-top gap-4 w-60 h-24 " src="https://crustier-twists.000webhostapp.com/imagenes/propuesta.png"
    alt="Logo_restaurante" /></div>    
     -->
     
       
  </head>

  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
  >
    <!--
   
    -->
    <div>
       <button
        class="
          text-4xl text-white
          lg:p-2
          shadow-2xl
          bg-gradient-to-r
          from-gray-500
          via-gray-800
          to-gray-500
          font-semibold
        "
      >
        {{ titulo }}
      </button>
     </div>
     <br>
    
    <label for="categoria">Categoría:</label>
    <select v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>(Entrada)</option>
      <option>(Plato Fuerte)</option>
      <option>(Adicionales)</option>
      <option>(Bebidas)</option>
      <option >(Especiales)</option>
    </select>
    <!--<span>Seleccionado: {{ selected }}</span>
    <p class="text-3xl ...">{{ selected }}</p>
    -->
    
    <div
      
      class="grid grid-cols-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 lg:p-8"> 
      <div 
      v-for="(unProducto, llave) in listaProductos"
      v-bind:key="llave"
      v-bind:value="llave"
      >
      <!--
        daba error joven, creo que falta la llave-por ello deje la ahí
      <div 
      v-for="unProducto in info"
      >
      -->
      <div v-if="selected === unProducto.tipo ">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
          <img :src="unProducto.link" alt="" class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          {{ unProducto.nombre }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ unProducto.tipo }}
        </p>

        <p class="mt-1 text-lg font-medium text-gray-900">
          ${{ unProducto.precio }}
        </p>
        
        <button  @click.prevent="procesarInformacion(unProducto.id)" class="bg-gradient-to-r from-green-300 to-blue-400 hover:from-gray-400 hover:to-gray-800 text-gray-800 font-semibold lg:m-4 py-2 px-4 border border-gray-600 rounded shadow">
            AÑADIR +
          </button>

      </div>
        
      </div>      
    </div>
    
  
  </body>

</div>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CompraService from "@/services/compras.js";
import ProductoService from "@/services/productos.js";
import ClienteService from "@/services/clientes.js";
// import axios from "axios"
export default {
  components: {
    NavBar,
  },
  mounted() {
    // this.listaProductos= ProductoService.obtenerTodos();
    this.listaCompras=CompraService.obtenerTodos();
    this.cliente= ClienteService.obtenerCliente();

    //  axios.get('http://localhost:8080/producto/todos')
    //  .then(response => (this.info = response.data));
    
    ProductoService.obtenerTodos().then((respuesta)=>{
          this.listaProductos=respuesta.data;
      }).catch((error)=>{
          console.log("Error Productos",error);
      });
  
  },
  data() {
    return {
      listaCompras:[],
      
      
      titulo:"Te damos la bienvenida al sabor de nuestra Tierra",
      compra: {
        //producto:{},
        //nombre: 'pepe',
        //cantidad: 0,
        //envio:0,
        producto: 0,
       
      },
      info: {},
      selected: '',
      listaProductos: [],
      seleccion: -1,
    };
  },

  methods: {
    procesarInformacion(id){
      this.compra.producto = id;
       if(this.cliente.id == 0){
           this.$router.push({name:"login"});
        }else{
            
            this.listaCompras.push(this.compra);
            this.$router.push({name:"Carrito"});
        }
      
    },

    
  //   cerrarSesion(){//para no dejar registros de nada
  //     localStorage.clear();//me limpia todas las varibles que tenía e dicha sesión
  //     this.$router.push({name:"login"});
    
  // }
  }
};
</script>

<style scoped>
header h1 {
  font-size: 6rem;
}
#boton {
  margin: 1rem;
}

</style>