





<template>
  <div class="home">
    <body
      class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
      style="
        background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
      "
    >
   
    
      <!-- <div>
        
        <main>
           
          <form action="#" id="f1">
            <label for="producto">Producto:</label>
            <select name="producto" id="productos" v-model="seleccion">
              <option value="-1">Seleccione una Categoria</option>
             
              <option
                v-for="(unProducto, llave) in listaProductos"
                v-bind:key="llave"
                v-bind:value="llave"
              >
                {{ unProducto.nombre }} - ${{ unProducto.precio }} -
                {{ unProducto.tipo }}
              </option>
            </select>

            <label for="cantidad">Cantidad:</label>
            <input type="number" name="cantidad" v-model="compra.cantidad" />
            <div>
              <input
                class="lg:mr-120 py-2 px-4"
                type="radio"
                name="envio"
                v-model="compra.envio"
                value="0"
              />Domicilio
            </div>

            <div>
              <input
                class="lg:mr-120 py-2 px-4"
                type="radio"
                name="envio"
                v-model="compra.envio"
                value="1"
              />
              Sin Domicilio
            </div>
            
          </form>
        </main>
        <div
          class="
            grid grid-cols-4
            gap-y-10
            sm:grid-cols-2
            gap-x-6
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-x-8
            lg:p-8
          "
        >
          <a
            v-for="(unProducto, llave) in listaProductos"
            v-bind:key="llave"
            v-bind:value="llave"
            href="#"
            class="group"
          >
            <div
              class="
                w-full
                aspect-w-1 aspect-h-1
                bg-gray-200
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <img
                :src="unProducto.link"
                alt=""
                class="
                  w-full
                  h-full
                  object-center object-cover
                  group-hover:opacity-75
                "
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ unProducto.nombre }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              ${{ unProducto.precio }}
            </p>

            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ unProducto.tipo }}
            </p>

            <button
              @click.prevent="procesarInformacion"
              type="button"
              class="
                bg-gradient-to-r
                from-green-300
                to-blue-400
                hover:from-gray-400 hover:to-gray-800
                text-gray-800
                font-semibold
                lg:m-4
                py-2
                px-4
                border border-gray-600
                rounded
                shadow
              "
            >
              AÑADIR +
            </button>
          </a>
        </div>
      </div>
       -->
    </body>
    
  </div>
</template>

<script >

// import ProductoService from "@/services/productos.js";
// import CompraService from "@/services/compras.js";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  // mounted() {
  //   this.listaProductos = ProductoService.obtenerTodos();
  //   this.listaCompras = CompraService.obtenerTodos();
  // },
  // data() {
  //   return {
  //     listaCompras: [],
  //     titulo: "Te damos la bienvenida al sabor de nuestra Tierra",
  //     compra: {
  //       producto: {},
  //       cantidad: 0,
  //       envio: 0,
  //     },
  //     seleccion: -1,
  //     nombresEnvio: ["Domicilio", "Sin Domicilio"],
  //     valoresEnvio: [20000, 0],
  //     listaCompras: [],
  //   };
  // },

  // methods: {
  //   prueba() {
  //     if (option == A) {
  //     } else {
  //     }
  //   },
  //   procesarInformacion() {
  //     this.compra.total = 0;
  //     this.compra.descuento = 0;

  //     this.compra.producto = this.listaProductos[this.seleccion];

  //     let subtotal = this.compra.producto.precio * this.compra.cantidad;
  //     let valorEnvio = 0;

  //     if (this.compra.cantidad > 5) {
  //       this.compra.descuento = subtotal * 0.1;
  //     } else if (this.compra.subtotal >= 200000) {
  //       this.compra.descuento = subtotal * 0.1;
  //     }

  //     if (this.compra.envio == 0) {
  //       valorEnvio = 0;
  //     } else if (this.compra.envio == 1) {
  //       valorEnvio = 1;
  //     }
  //     valorEnvio = this.valoresEnvio[this.compra.envio];

  //     this.compra.total = valorEnvio + subtotal - this.compra.descuento; //falta el this?

  //     this.listaCompras.push(this.compra);

  //     // this.limpiarFormulario();
  //     this.$router.push({ name: "Compras" });
  //   },
  // },
};
</script>
<style scoped>
/* #form_compra {
  display: grid;
  grid-template-columns: 6rem 10rem;
  row-gap: 1rem;
}
main {
  display: grid;
  grid-template-columns: 4fr 8fr;
  column-gap: 1rem;
  padding: 2rem;
} */
/* table {
  width: 80%;
  margin: 12rem;
  
} */

main {
  display: grid;
  padding: 12rem;
}

header h1 {
  font-size: 6rem;
}
#boton {
  margin: 1rem;
}
</style>
