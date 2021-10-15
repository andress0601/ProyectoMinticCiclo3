<template>
 
       <div class="pruebas">
      <body class="bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
   
   >
   <h1>{{titulo}}</h1><br>
  
    <router-link class="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-gray-400 hover:to-gray-800 text-gray-800 font-semibold lg:m-6 py-4 px-4 border border-gray-600 rounded shadow" 
    :to="{name:'Home'}">Crear nueva Compra</router-link>
    
      <main class="lg:p-8 ">
        <div  class="mx-20 p-16 ..">
      <!-- <h2>Listado de Compras - {{cliente.nombre}}</h2> -->
      <table class="bg-blue-400 " border="1">
        <thead>
          <tr>
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>ENVÍO</th>
            <th>DESCUENTO</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody class="bg-blue-200" id="datos_compras">
          <tr v-for="(unaCompra, i) in listaCompras" :key="i">
    
            <td>
              {{ unaCompra.producto.nombre }} - ${{ unaCompra.producto.precio }} -{{unaCompra.producto.tipo}}
            </td>
            <td>{{ unaCompra.cantidad }}</td>
            <td>{{ nombresEnvio[unaCompra.envio] }}</td>
            <td>${{ unaCompra.descuento }}</td>
            <td>${{ unaCompra.total }}</td>
          </tr>
        </tbody>
      </table>
    
    </div>
    <!--Aplicar a página para velocidad -->
    <!-- <router-link class="boton" :to="{name:'Registro'}">Crear nueva Compra</router-link> -->
    </main>
        </body>
    </div>
<p></p>
</template>

<script>
import CompraService from "@/services/compras.js";


export default {
  mounted() {
    this.listaCompras=CompraService.obtenerTodos();
    

        // if(!this.cliente.nombre){//no tiene permisos, entonces salgase
        //    this.$router.push({name:"login"});//regresese
        // }
  },
  
  data() {
    return {
      titulo:"Estructura Lógica-pruebas",
      listaCompras:[],
      nombresEnvio: ["Domicilio", "Sin Domicilio"],
      
    };
    
  },
}
</script>

<style scoped>
  
  
</style>

