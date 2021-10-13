
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
          <label for="producto"> PRODUCTOS: </label>
          <select name="producto" id="producto" v-model="seleccion">
            <option value="-1">Seleccione un producto</option>

            <option
              v-for="(unProducto, llave) in listaProductos"
              v-bind:key="llave"
              v-bind:value="llave"
            >
              {{ unProducto.nombre }} - ${{ unProducto.precio }} - {{unProducto.tipo}}
            </option>
          </select>

          <button class="bg-gradient-to-r from-green-300 to-blue-400 hover:from-gray-400 hover:to-gray-800 text-gray-800 font-semibold lg:m-4 py-2 px-4 border border-gray-600 rounded shadow">
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

  
    <div
      
      class="grid grid-cols-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 lg:p-8"> 
      <a 
      v-for="(unProducto, llave) in listaProductos"
      v-bind:key="llave"
      v-bind:value="llave"
      href="#" class="group">
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
        
        <button class="bg-gradient-to-r from-green-300 to-blue-400 hover:from-gray-400 hover:to-gray-800 text-gray-800 font-semibold lg:m-4 py-2 px-4 border border-gray-600 rounded shadow">
            AÑADIR +
          </button>
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
    //ENTRADAS
    let producto1 = {
      id: 1,
      nombre: "Pandeyucas(Tradicionales y crocanticos)",
      precio: 0,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
      tipo:"(Entrada)",
    };

    let producto2 = { 
      id:2,
      nombre: "Arepas(De maíz pelao)", 
      precio: 0,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada%202%20(1).png",
      tipo: "(Entrada)",
    };
    //PLATOS FUERTES
    let producto3= {
      id: 3,
      nombre: "Cabro Con Pepitoria(Yuca, Arepa y Ensalada)",
      precio: 26000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/cabro-1-400x250.jpg",
      tipo:"(Plato Fuerte)",
    };

    let producto4 = { 
      id:4,
      nombre: "Filete de Pescado(Arroz Blanco, Patacón y Ensalada)", 
      precio: 30000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pescado(act).jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto5 = { 
      id:5,
      nombre: "Sancocho de gallina(Arroz,aguacate y yuca)", 
      precio: 17000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/sancocho-de-gallina(ACT).jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto6 = { 
      id:6,
      nombre: "Pollo asado(Yuca, Arepa, Papa y un delicioso ají)", 
      precio: 22000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pollo.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto7 = { 
      id:7,
      nombre: "Sobrebarriga(Al Horno: Yuca, Arepa y Ensalada)", 
      precio: 24000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/sobrebarriga%20act.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto8 = { 
      id:8,
      nombre: "Pechuga a la plancha(Papa a la Francesa y Ensalada)", 
      precio: 17000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pechuga%20act.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto9= {
      id: 9,
      nombre: "Cazuela de Mariscos(Arroz Blanco y Patacón)",
      precio: 34000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/cazuela-act.jpg",
      tipo:"(Plato Fuerte)",
    };

    let producto10 = { 
      id:10,
      nombre: "Oreada(Arroz Blanco , Yuca, ensalada)", 
      precio: 19000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/oreada%20act.png",
      tipo: "(Plato Fuerte)",
    };
    let producto11 = { 
      id:11,
      nombre: "Pavo relleno(Pure de papa y ensalada agridulce)", 
      precio: 34000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pavo%20relleno%20act.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto12 = { 
      id:12,
      nombre: "Arroz Paisa(patacones y aguacate)", 
      precio: 21000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/arroz%20paisa.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto13 = { 
      id:13,
      nombre: "Ajiaco Santareño(arroz blanco y aguacate)", 
      precio: 24000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/ajiaco.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto14 = { 
      id:14,
      nombre: "Bandeja Paisa", 
      precio: 17000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/Bandeja%20act.png",
      tipo: "(Plato Fuerte)",
    };
    let producto15 = { 
      id:15,
      nombre: "Mute(Yuca, Arroz y aguacate)", 
      precio: 14000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/mute%20act.png",
      tipo: "(Plato Fuerte)",
    };
    let producto16 = { 
      id:16,
      nombre: "Arroz Con Pollo(papas a la Francesa y aguacate", 
      precio: 14000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/arroz-pollo.jpg",
      tipo: "(Plato Fuerte)",
    };
    let producto17 = {
      id: 17,
      nombre: "Pandeyucas(Tradicionales y crocanticos)",
      precio: 6000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
      tipo:"(Adicionales)",
    };

    let producto18 = { 
      id:18,
      nombre: "Arepas(De maíz pelao)", 
      precio: 8000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada%202%20(1).png",
      tipo: "(Adicionales)",
    };

    let producto19 = {
      id:19,
      nombre: "Hormigas Culonas(Platillo  exquisito (30gr))",
      precio: 12000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/c.jpg",
      tipo: "(Adicionales)",
    };

    let producto20 = { 
      id:20,
      nombre: "Papas Fritas(Bien crujientes)", 
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Papas%20fritas.jpg",
       tipo: "(Adicionales)",
      };

    let producto21 = {
      id:21,
      nombre: "Patacones(De los mejores plátanos)",
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Captura%203.PNG",
       tipo: "(Adicionales)",
    };

    let producto22 = {
      id:22,
      nombre: "Agua Cristal con gas",
      precio: 1800,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/cristal%20gas.jpg",
       tipo: "(Bebidas)",
    };

    let producto23 = {
      id:23,
      nombre: "Agua Cristal",
      precio: 1200,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/cristal.png",
       tipo: "(Bebidas)",
    };
    let producto24 = {
      id:24,
      nombre: "Agua Manzana",
      precio: 2300,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/brisa%20manzana.jpg",
       tipo: "(Bebidas)",
    };
    let producto25 = {
      id:25,
      nombre: "Aguapanela",
      precio: 1800,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/aguapanela.jpg",
       tipo: "(Bebidas)",
    };
    let producto26 = {
      id:26,
      nombre: "Pony Malta 1.5",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/pony.jpg",
       tipo: "(Bebidas)",
    };
    let producto27 = {
      id:27,
      nombre: "Cocacola 1.5",
      precio: 3500,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/coca%20cola.jpg",
       tipo: "(Bebidas)",
    };
    let producto28 = {
      id:28,
      nombre: "Combo :Sprit,Cocacola,Fanta",
      precio: 6000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/bebidas.jpg",
       tipo: "(Bebidas)",
    };
    let producto29 = {
      id:29,
      nombre: "Colombiana Postobon 1.5",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/colombiana.jpg",
       tipo: "(Bebidas)",
    };
    let producto30 = {
      id:30,
      nombre: "Kola Postobon 1.5",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/gaseosa_kola_postobon.png",
       tipo: "(Bebidas)",
    };
    let producto31 = {
      id:31,
      nombre: "Manzana Postobon 3lts",
      precio: 6000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/manza.jpg",
       tipo: "(Bebidas)",
    };
    let producto32 = {
      id:32,
      nombre: "Naranja Postobon 1.5",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/naranja.jpg",
       tipo: "(Bebidas)",
    };
    let producto33 = {
      id:33,
      nombre: "Uva Postobon 1.5",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/uva.jpg",
       tipo: "(Bebidas)",
    };
    let producto34 = {
      id:34,
      nombre: "Seven up Postobon 3lts",
      precio: 6000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/seven%20up.png",
       tipo: "(Bebidas)",
    };
    let producto35 = {
      id:35,
      nombre: "Hit mango",
      precio: 2700,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hit%20mango.jpg",
       tipo: "(Bebidas)",
    };
    let producto36 = {
      id:36,
      nombre: "Hit Mora",
      precio: 2700,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hit%20mora.jpg",
       tipo: "(Bebidas)",
    };
    let producto37 = {
      id:37,
      nombre: "Hit Tropical",
      precio: 2700,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hot%20tropical.jpg",
       tipo: "(Bebidas)",
    };
    let producto38 = {
      id:38,
      nombre: "Jugos Naturales",
      precio: 2100,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/jugos%20naturales.jpg",
       tipo: "(Bebidas)",
    };
    let producto39 = {
      id:39,
      nombre: "Limonada Natural",
      precio: 2500,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/limonada.jpg",
       tipo: "(Bebidas)",
    };
    let producto40 = {
      id:40,
      nombre: "Lulada",
      precio: 2500,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/lulada.jpg",
       tipo: "(Bebidas)",
    };
    let producto41 = {
      id:41,
      nombre: "Cerveza Aguila",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/aguila-cerveza.png",
       tipo: "(Bebidas)",
    };
    let producto42 = {
      id:42,
      nombre: "Club Colombia  black",
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/black.png",
       tipo: "(Bebidas)",
    };
    let producto43 = {
      id:43,
      nombre: "Club Colombia Dorada",
      precio: 7000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/dorada.png",
       tipo: "(Bebidas)",
    };
    let producto44 = {
      id:44,
      nombre: "Cerveza Costeña (und)",
      precio: 4000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/COSTE%c3%91A.jpg",
       tipo: "(Bebidas)",
    };
    let producto45 = {
      id:45,
      nombre: "Cerveza Poker",
      precio: 3000,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/poker-x400.png",
       tipo: "(Bebidas)",
    };
    let producto46 = {
      id:46,
      nombre: "Heineken ",
      precio: 2500,
      link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/heineken.jpg",
       tipo: "(Bebidas)",
    };

    this.listaProductos = [
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
      producto6,
      producto7,
      producto8,
      producto9,
      producto10,
      producto11,
      producto12,
      producto13,
      producto14,
      producto15,
      producto16,
      producto17,
      producto18,
      producto19,
      producto20,
      producto21,
      producto22,
      producto23,
      producto24,
      producto25,
      producto26,
      producto27,
      producto28,
      producto29,
      producto30,
      producto31,
      producto32,
      producto33,
      producto34,
      producto35,
      producto36,
      producto37,
      producto38,
      producto39,
      producto40,
      producto41,
      producto42,
      producto43,
      producto44,
      producto45,
      producto46,
      

      

    ]; //cuidado, el this
  },
  data() {
    return {
      selected: '',
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