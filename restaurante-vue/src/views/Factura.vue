<template>


<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<table class="table-auto" v-for="(unProducto, llave) in listaProductos" v-bind:key="llave" v-bind:value="llave">
  <thead>
    <tr>
      <!-- <th>Title</th>
      <th>Author</th>
      <th>Views</th> -->
    </tr>
  </thead>
    <tbody v-for="(unaCompra, i) in listaCompras" :key="i">
        <tr v-if="unaCompra.producto === unProducto.id">
        <td>Cliente</td>
        <td class="bg-emerald-200" ><div>{{unProducto.nombre}}</div></td>
        <td><div>${{unProducto.precio}}</div></td>
        <td class="bg-emerald-200">0.0</td>
        <td>0.0</td>
        <td class="bg-emerald-200">0.0</td>
        </tr> 
    </tbody>
</table>




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
    
  },
  
  data() {
    return {
      titulo:"Estructura Lógica-pruebas",
      listaCompras:[],
      listaProductos: [],
      cliente:{}
      
    };
    
  },
   methods: {
    procesarInformacion(){ 
     
    }
   }
}
</script>


<style scoped>



</style>