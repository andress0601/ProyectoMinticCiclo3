<template>

<div class="bg-fondo-restaurante">
  <div class="grid grid-cols-2">

    <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200"
        v-for="(unProducto, llave) in listaProductos"
      v-bind:key="llave"
      v-bind:value="llave"
        >
          
          <tbody 
          v-for="(unaCompra, i) in listaCompras" :key="i"
          class="bg-white divide-y divide-gray-200">
            
            <tr 
            v-if="unaCompra.producto === unProducto.id "
            >
              <!-- columna1 -->
              <td class="px-6 py-4 whitespace-nowrap">

                
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="unProducto.link" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{unProducto.nombre}}
                    </div>
                    <div class="text-sm text-gray-500">
                      ${{unProducto.precio}}
                    </div>
                  </div>
                </div>

              </td>

              <!-- columna2 -->
              <td class="px-6 py-4 whitespace-nowrap">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Descartar
                </button>
              </td>
              <!-- columna3 -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="inline-flex">
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    +
                  </button>
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    -
                  </button>
                </div>
              </td>

              <!-- 
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
              -->

            </tr>

            <!-- More people... -->
          </tbody>

        </table>
      </div>
    </div>
  </div>
    </div>
    
    <div class="container mx-auto text-gray-800">
      <div class="space-y-4 ...">
        
 
      <span class="block ...">
        <p class="text-3xl ...">Usuario: {{cliente.nombre}} </p>
       
      </span>
      <span class="block ...">
        <p class="text-3xl ...">Costo de domicilio</p>
        <p class="text-2xl ...">$20.000</p>
      </span>
      <span class="block ...">
        <p class="text-3xl ...">Descuento</p>
        <p class="text-2xl ...">$0.0</p>
      </span>
      <span class="block ...">
        <p class="text-3xl ...">Total</p>
        <p class="text-2xl ...">$115.500</p>
      </span>

      <span class="block ...">
        <button @click.prevent="procesarInformacion" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Validar
        </button>
      </span>

      <span class="block ...">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Atrás
        </button>
      </span>
        
      
    </div>
</div>
    

  </div>
</div>

  

  

</template>

<script>
  import CompraService from "@/services/compras.js";
  import ProductoService from "@/services/productos.js";
  import ClienteService from "@/services/clientes.js"

  export default {
  mounted() {
    this.listaCompras=CompraService.obtenerTodos();
    this.listaProductos= ProductoService.obtenerTodos();
    this.cliente= ClienteService.obtenerCliente();
    

        // if(!this.cliente.nombre){//no tiene permisos, entonces salgase
        //    this.$router.push({name:"login"});//regresese
        // }
  },
  
  data() {
    return {
      titulo:"Estructura Lógica-pruebas",
      listaCompras:[],
      listaProductos: [],
      cliente:{}
      //nombresEnvio: ["Domicilio", "Sin Domicilio"],
      
    };
    
  },
   methods: {
     procesarInformacion(){
     
      
     
     }
   }
}
</script>