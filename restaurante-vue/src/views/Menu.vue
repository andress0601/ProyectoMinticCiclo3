
   <template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="https://crustier-twists.000webhostapp.com/imagenes/sopa.png"
      type="image/x-icon"
    />

    <title>MENU</title>

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
    <main>
      <div>
        <h2 valor="Hello word">Productos</h2>
        <form action="#" id="form_menu">
          <label for="producto"> ENTRADAS: </label>
          <select name="producto" id="producto" v-model="seleccion">
            <option value="-1">Seleccione un producto</option>

            <option
              v-for="(unProducto, llave) in listaProductos"
              v-bind:key="llave"
              v-bind:value="llave"
            >
              {{ unProducto.nombre }} - ${{ unProducto.precio }}
            </option>
          </select>

          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Añadir
          </button>
          <!-- <select name="" id=""></select> -->
        </form>
      </div>
    </main>

    <select v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Seleccionado: {{ selected }}</span>
    <p class="text-3xl ...">{{ selected }}</p>

  
    <div
      
      class="grid grid-cols-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> 
      <a 
      v-for="(unProducto, llave) in listaProductos"
      v-bind:key="llave"
      v-bind:value="llave"
      href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img :src="unProducto.link" alt="" class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          {{ unProducto.nombre }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          ${{ unProducto.precio }}
        </p>
      </a>      
    </div>
  
  
  </body>

<p></p>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  mounted() {
    let producto1 = {
      nombre: "Pandeyucas(Tradicionales y crocanticos)",
      precio: 6000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
    };

    let producto2 = { 
      nombre: "Arepas(De maíz pelao)", 
      precio: 8000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Papas%20fritas.jpg",
    };

    let producto3 = {
      nombre: "Hormigas Culonas(Platillo exótico y exquisito)",
      precio: 12000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada.PNG",
    };

    let producto4 = { 
      nombre: "Papas Fritas(Bien crujientes)", 
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Papas%20fritas.jpg",
      };

    let producto5 = {
      nombre: "Patacones(De los mejores plátanos)",
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Patacon%20con%20Hogao.jpg",
    };

    this.listaProductos = [
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
    ]; //cuidado, el this
  },
  data() {
    return {
      listaProductos: [],
      compra: {
        producto: {},
      },
      seleccion: -1,
    };
  },
};
</script>

<style scoped>
header h1 {
  font-size: 6rem;
}
#boton {
  margin: 1rem;
}

/* #form_menu{
    display:grid;
    grid-template-columns: 6rem 10rem;
    row-gap: 1rem;
} */
</style>