<template>
  <div class="bg-fondo-restaurante">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col">
        <div class="-my-2 sm:-mx-6 lg:-mx-8" style="margin: 25px">
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
                          <div v-if="(unProducto.nombre.length>10)" class="text-sm font-medium text-gray-900">
                            
                            {{ unProducto.nombre.substring(0,15)+".." }}
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
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto text-gray-800" style="margin: 27%">
        <div class="space-y-4 ...">
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Costo de domicilio</p>
            <p class="text-2xl ..." style="color: white">${{ domicilio }}</p>
          </span>
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Descuento</p>
            <p class="text-2xl ..." style="color: white">${{ aplicarDescuento() }}</p>
          </span>
          <span class="block ...">
            <p class="text-3xl ..." style="color: white">Total</p>
            <p class="text-2xl ..." style="color: white">
              $ {{ total() }}
            </p>
          </span>

          <span class="block ...">

            <button
              @click.prevent="reserva()"

           

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

        </div>
      </div>
    </div>
  </div>
  <!-- <p>{{aplicarDescuento()}}</p> -->
</template>

<script>
import CompraService from "@/services/compras.js";
import ProductoService from "@/services/productos.js";
import ClienteService from "@/services/clientes.js";
import axios from "axios";
export default {
  mounted() {
    this.listaCompras = CompraService.obtenerTodos();
    this.cliente = ClienteService.obtenerCliente();
    axios
    .get('http://132.145.74.80:8080/producto/todos')
    .then(response => (this.info = response.data));
    
     ProductoService.obtenerTodos().then((respuesta)=>{
            this.listaProductos=respuesta.data;
        }).catch((error)=>{
            console.log("Error Productos",error);
        });
  },
  data() {
    return {
      titulo: "Estructura Lógica-pruebas",
      listaCompras: [],
      listaProductos: [],
      cliente: {},
      domicilio: 20000,
      info: []
    };
  },
  methods: {
    procesarInformacion() {
      let subtotal = 0;
      
      for (var j = 0; j < this.info.length; j++) {
        for (var i = 0; i < this.listaCompras.length; i++) {
          if (this.listaCompras[i].producto == this.info[j].id) {
            subtotal += this.info[j].precio;
          }
        }
      }
      subtotal += this.domicilio;
      return subtotal;
    },
    aplicarDescuento(){
      let ahorro = 0;
      let subtotal = this.procesarInformacion();
      if (subtotal >= 100000) {
        ahorro += subtotal * 0.1;
      }else{
        ahorro = 0;
      }
      return ahorro
    },
    total(){
      let total = this.procesarInformacion();
        total -= this.aplicarDescuento();
      return total
    },

    borrarDato(dato) {
      let pos = this.listaCompras.indexOf(dato);
      this.listaCompras.splice(pos, 1);
      console.log(pos);
    },
    
    recorrido() {
      let lista = "";
      for (var i = 0; i < this.listaCompras.length; i++) {
        lista += this.listaCompras[i].producto + " ";
      }
      return lista;
    },
    validarCompra() {
      let client = localStorage.cliente;
      console.log(client);
      let post = {
        cantidad: this.listaCompras.length,
        cliente: client,
        descuento: this.aplicarDescuento(),
        total: this.procesarInformacion(),
        listaProductos: this.recorrido(),
      };
      axios.post("http://132.145.74.80:8080/compra", post).then((result) => {
        console.log(result);
      });
    },
    reserva(){
      this.validarCompra();
      this.$router.push({name:"Reserva"});        
      this.listaCompras.splice(pos,1); 
      console.log(pos); 
    },
    
    }
  };
</script>