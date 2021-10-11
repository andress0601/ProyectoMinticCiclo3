
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



  <body class=" bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full lg:p-8"
    style="background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg)">
 

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

          <button
            id="boton"
            class="
              bg-gradient-to-r
              from-green-400
              to-blue-500
              hover:from-gray-400
              hover:to-gray-800
            "
            type="button"
          >
            AÑADIR +
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

    <select v-model="selected">
  <option disabled value="">Seleccione un elemento</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
  </select>
  <span>Seleccionado: {{ selected }}</span>
  <p class="text-3xl ...">{{ selected }}</p>




    <div
    v-for="(unProducto, llave) in listaProductos"
    v-bind:key="llave"
    v-bind:value="llave"
  >
    <img :src="unProducto.link" style="width: 20%" alt="" />
    <p class="text-3xl ...">{{ unProducto.nombre }}</p>
    <p class="text-3xl ...">{{ unProducto.precio }}</p>
  </div>
    </body>



  </body>

  
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
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Captura%203.PNG",
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

    header h1{
        font-size: 6rem;
    }

    .icono{
        display: inline-block;
        margin: 1rem;
        padding: 0rem; 
        row-gap: 2px;
        width: 1.875rem;
        height: 0.75rem;
    }
    #boton{
        
        margin: 1rem;
    }


/* #form_menu{
    display:grid;
    grid-template-columns: 6rem 10rem;
    row-gap: 1rem;
} */
</style>