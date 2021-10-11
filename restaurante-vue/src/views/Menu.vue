
   <template>
    <head >
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://crustier-twists.000webhostapp.com/imagenes/sopa.png" type="image/x-icon">
   
    <title>MENU</title>

      <!--class=" bg-gray-800"-->
      <nav class="bg-gray-800" >
        <div class="max-w-7xl mx-auto  ">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
              
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
              <span class="font-semibold text-xl tracking-tight">El sabor de mi tierra</span>
            </div>

            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
               
              </div>
              <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="home.html" class=" text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page">Menú</a>
    
                  <a href="login.html"
                    class="  text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
    
                  <a href="register.html"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Registro</a>
    
                  <a href="Estructura_reserva.html"
                    class=" text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reservación</a>
    
    
                  <a href="Carrito_compras.html"
                    class=" text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Ver Carrito</a>
                </div>
              </div>
            </div>
            
          
            <div class="ml-3 relative">
              
            </div>
          </div>
        </div> 
    
              
      </nav>  
    <div><img class=" object-left-top gap-4 w-60 h-24 " src="https://crustier-twists.000webhostapp.com/imagenes/propuesta.png"
    alt="Logo_restaurante" /></div>    
     
</head>

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
           
            <button id="boton" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-gray-400 hover:to-gray-800 " 
            type="button"> AÑADIR +</button>
            <!-- <select name="" id=""></select> -->
        </form>
    </div>
    </main>
    </body>

    

</template>

<script>
export default {
    mounted() {
        let producto1 = { nombre: "Pandeyucas(Tradicionales y crocanticos)", precio: 6000, link:"https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg"};
        let producto2 = { nombre: "Arepas(De maíz pelao)", precio: 8000};
        let producto3 = { nombre: "Hormigas Culonas(Platillo exótico y exquisito)", precio: 12000};
        let producto4 = { nombre: "Papas Fritas(Bien crujientes)", precio: 7000};
        let producto5 = { nombre: "Patacones(De los mejores plátanos)", precio: 7000};
   
   this.listaProductos = [
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
    ]; //cuidado, el this
  },
  data(){
      return{
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
    header h1{
        font-size: 6rem;
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