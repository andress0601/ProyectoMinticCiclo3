<template>
  <div class="bg-fondo-restaurante">
    <div class="grid grid-cols-1 md:grid-cols-2" >
      <div class="flex flex-col">
        <div class="-my-2 sm:-mx-6 lg:-mx-8"
        style=margin:25px;>
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table
                class="min-w-full divide-y divide-gray-200"
                v-for="(unProducto, llave) in listaProductos"
                v-bind:key="llave"
                v-bind:value="llave"
              >
                <tbody
                  v-for="(unaCompra, i) in listaCompras"
                  :key="i"
                  class="bg-white divide-y divide-gray-200"
                >
                  <tr v-if="unaCompra.producto === unProducto.id">
                    <!-- columna1 -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="unProducto.link"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ unProducto.nombre }}
                          </div>
                          <div class="text-sm text-gray-500">
                            ${{ unProducto.precio }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <!-- columna2 -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <button
                        @click.prevent="borrarDato(unaCompra)"
                        class="
                          bg-white
                          hover:bg-gray-100
                          text-gray-800
                          font-semibold
                          py-2
                          px-4
                          border border-gray-400
                          rounded
                          shadow
                        "
                      >
                        Descartar 
                      </button>
                    </td>
                    <!-- columna3 -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="inline-flex">
                        <button
                          class="
                            bg-gray-300
                            hover:bg-gray-400
                            text-gray-800
                            font-bold
                            py-2
                            px-4
                            rounded-l
                          "
                        >
                          +
                        </button>
                        <button
                          class="
                            bg-gray-300
                            hover:bg-gray-400
                            text-gray-800
                            font-bold
                            py-2
                            px-4
                            rounded-r
                          "
                        >
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

      <div class="container mx-auto text-gray-800"
      style=margin:27%;>
        <div class="space-y-4 ...">
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Usuario</p>
            <p class="text-2xl ..." style="color: white">
              {{ cliente.nombre }}
            </p>
          </span>
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Costo de domicilio</p>
            <p class="text-2xl ..." style="color: white">$20.000</p>
          </span>
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Descuento</p>
            <p class="text-2xl ..." style="color: white">$0.0</p>
          </span>
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Total</p>
            <p class="text-2xl ..." style="color: white">$ {{procesarInformacion()}}</p>
          </span>

          <span class="block ...">
            <button
              class="
                bg-white
                hover:bg-gray-100
                text-gray-800
                font-semibold
                py-2
                px-4
                border border-gray-400
                rounded
                shadow
              "
            >
              Validar
            </button>
          </span>

          <span class="block ...">
            <button
              class="
                bg-white
                hover:bg-gray-100
                text-gray-800
                font-semibold
                py-2
                px-4
                border border-gray-400
                rounded
                shadow
              "
            >
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
import ClienteService from "@/services/clientes.js";


export default {

  mounted() {
    this.listaCompras = CompraService.obtenerTodos();
    this.listaProductos = ProductoService.obtenerTodos();
    this.cliente = ClienteService.obtenerCliente();

    // if(!this.cliente.nombre){//no tiene permisos, entonces salgase
    //    this.$router.push({name:"login"});//regresese
    // }
  },

  data() {
    

    return {
      titulo: "Estructura Lógica-pruebas",
      listaCompras: [],
      listaProductos: [],
      cliente: {},
      
    };
  },
  methods: {
    procesarInformacion() {

      let subtotal = 0;
      let domicilio = 20000

      for (var j=0; j< this.listaProductos.length; j++){
        for (var i=0; i< this.listaCompras.length; i++){
          if (this.listaCompras[i].producto == this.listaProductos[j].id){
            //subtotal += domicilio;
            subtotal += this.listaProductos[j].precio;
          }
        }
      }

      return subtotal;

    },

    borrarDato(dato){
      let pos = this.listaCompras.indexOf(dato);
      this.listaCompras.splice(pos,1); 
      console.log(pos); 
    }
    }
  }
;
</script>