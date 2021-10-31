<template>
  <div
    class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
  >
    <div class="container mx-auto">
      <div class="min-h-screen flex flex-col justify-center sm:py-4">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div class="px-8 py-12 bg-white w-full">
            <div class="mb-4 md:mr-2 md:mb-0">
              <h1>------------------------------------------</h1>
              <p class="italic focus:underline font-bold">
                EL SABOR DE NUESTRA TIERRA
              </p>
              <br />
              <label class="block mb-0 text-sm text-left text-gray-700">
                <div class="flex space-x-9 italic">
                  <div>FECHA: {{ envio.fecha }}</div>
                  <div>HORA: {{ envio.hora }}</div>
                </div>
              </label>
            </div>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="flex space-x-4">
                <div class="font-semibold">NIT CLIENTE:</div>
                <div>{{ clientes.usuario }}</div>
              </div>
            </label>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="font-semibold">NOMBRE CLIENTE:</div>
            </label>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div>
                <p>{{ clientes.nombre }}</p>
              </div>
            </label>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="flex space-x-2">
                <div class="font-semibold">CIUDAD:</div>
                <div>{{ envio.ciudad }}</div>
              </div>
            </label>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="flex space-x-2">
                <div class="font-semibold">LOCALIDAD:</div>
                <div>{{ envio.localidad }}</div>
              </div>
            </label>
            <label class="block mb-4 text-sm text-left text-gray-700">
              <div class="flex space-x-2">
                <div class="font-semibold">TEL CEL:</div>
                <div>{{ envio.telefono }}</div>
              </div>
            </label>
            <label
              class="block mb-0 text-sm text-left text-gray-700"
              for="firstName"
            >
              <div class="font-semibold">DATOS DE COMPRA</div>
              <h1>------------------------------------------</h1>
            </label>

            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="font-semibold">LISTA PRODUCTOS {</div>
            </label>

            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="font-medium">PRODUCTO :</div>
            </label>
            <label class="block mb-0 text-sm text-left text-gray-700">
              <div>
                <p>{{ producto }}</p>
              </div>
            </label>

            <label class="block mb-0 text-sm text-left text-gray-700">
              <div class="flex space-x-3">
                <div class="font-medium">CANT PRODUCTOS ADQUIRIDOS:</div>
                <div>{{ compra.cantidad }}</div>
              </div>
            </label>

            <label class="block mb-2 text-sm text-left text-gray-700">
              <div>}</div>
            </label>
            <label
              class="block mb-0 text-sm text-left text-gray-700"
              for="firstName"
            >
              <div class="flex space-x-3">
                <div class="font-semibold">MEDIO DE PAGO:</div>
                <div>{{ envio.tipoPago }}</div>
              </div>
            </label>

            <label
              class="block mb-4 text-sm text-left text-gray-700"
              for="firstName"
            >
              <div class="flex space-x-3">
                <div class="font-semibold">DIRECCION DOMICILIO:</div>
                <div>{{ envio.direccion }}</div>
              </div>
            </label>
            <label
              class="block mb-2 text-sm text-left text-gray-700"
              for="firstName"
            >
              <h1>------------------------------------------</h1>
            </label>
            <label
              class="block mb-0 text-sm text-left text-gray-700"
              for="firstName"
            >
              <div class="flex space-x-3">
                <div class="font-bold">DESCUENTO :</div>
                <div>${{ compra.descuento }}</div>
              </div>
            </label>
            <label
              class="block mb-2 text-sm text-left text-gray-700"
              for="firstName"
            >
              <div class="flex space-x-3">
                <div class="font-bold">TOTAL A PAGAR :</div>
                <div>${{ compra.total }}</div>
              </div>
            </label>

            <label
              class="block mb-6 text-sm text-left text-gray-700"
              for="firstName"
            >
              <h1>------------------------------------------</h1>
            </label>

            <label class="block mb-4 text-sm text-left text-gray-700 italic">
              <h1 class="font-semibold">
                HA SIDO UN GUSTO ATENDERTE ¡GRACIAS!
              </h1>
            </label>

            <button
              @click.prevent="Ventas(), limpiar()"
              class="
                mb-4
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
              Revisar Factura
            </button>
            <label class="block mb-4 text-sm text-left text-gray-700 italic">
              <h3
                class="
                  transition
                  duration-200
                  mx-5
                  px-5
                  py-4
                  cursor-pointer
                  font-normal
                  text-sm
                  rounded-lg
                  text-gray-500
                  hover:bg-blue-300
                  focus:outline-none
                  focus:bg-gray-200
                  focus:ring-2
                  focus:ring-gray-400
                  focus:ring-opacity-50
                  ring-inset
                  inline-block
                  ml-1
                "
              >
                Version beta (please press the button 2 times to bring
                information)
              </h3>
            </label>
          </div>
        </div>
      </div>
    </div>
    <h2>{{ error }}</h2>
  </div>
  <!-- <p>{{compras}}</p> -->
  <!-- <p>{{clientes.usuario}}</p> -->
  <!-- <p>{{lProductos}}</p> -->
  <!-- <p>{{producto}}</p> -->
</template>

<script>
import axios from "axios";
import ClienteService from "@/services/clientes.js";

import MetodosService from "../services/metodos.js";

export default {
  mounted() {
    MetodosService.metodoUno()
      .then((respuesta) => {
        this.compras = respuesta.data;
      })
      .catch((error) => {
        console.log("Error Compras", error);
      });

    ClienteService.obtenerCliente().then((respuesta) => {
      this.clientes = respuesta.data;
    });
  },
  data() {
    return {
      envio: {
        fecha: "",
        hora: "",
        tipoPago: "",
        ciudad: "",
        localidad: "",
        telefono: "",
        compra_id: 0,
        direccion: "",
      },
      compra: {
        cantidad: "",
        descuento: "",
        listaProductos: {},
        total: "",
      },
      clientes: {
        nombre: "",
        usuario: "",
      },
      compras: {},
      envios: {},

      lProductos: [],
      producto: [],
    };
  },

  methods: {
    Ventas() {
      this.compra = this.compras[this.compras.length - 1];
      let idcompra = this.compras[this.compras.length - 1].id;

      axios
        .get(`http://132.145.74.80:8080/envio/cliente/${idcompra}`)
        .then((response) => (this.envios = response.data));

      axios
        .get(`http://132.145.74.80:8080/producto/todos`)
        .then((response) => (this.lProductos = response.data));
    },

    prueba() {
      this.envio.fecha = this.envios[0].fecha;
      this.envio.hora = this.envios[0].hora;
      this.envio.tipoPago = this.envios[0].tipoPago;
      this.envio.direccion = this.envios[0].direccion;
      this.envio.ciudad = this.envios[0].ciudad;
      this.envio.localidad = this.envios[0].localidad;
      this.envio.telefono = this.envios[0].telefono;
      this.envio.compra_id = this.envios[0].compra_id;

      let arr = this.compra.listaProductos.split(" ");

      for (var j = 0; j < this.lProductos.length; j++) {
        // console.log(this.lProductos);

        for (var i = 0; i < arr.length - 1; i++) {
          if (this.lProductos[j].id == arr[i]) {
            // console.log(arr[i]);

            this.producto.push(this.lProductos[j].nombre);
            console.log(this.lProductos[j].nombre);
          }
        }
      }
    },
    limpiar() {
      this.producto.splice(this.lProductos.nombre);
      this.prueba();
    },
  },
};
</script>
<style  scoped>
h2 {
  font-size: 3rem;
  font-style: initial;
  color: red;
}
</style>

