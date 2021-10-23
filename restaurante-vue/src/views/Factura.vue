<template>
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

<main>
<div>
<!-- v-for="(unProducto, llave) in listaProductos" v-bind:key="llave" v-bind:value="llave" -->
    
  <table class="table-auto" border="-1" v-for="(unProducto, llave) in listaProductos" v-bind:key="llave" v-bind:value="llave">
    <thead>
      <tr>
        <!-- <th>Cliente</th>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Descuento</th>
        <th>Total</th> -->
      </tr>
    </thead>
      <tbody v-for="(unaCompra, i) in listaCompras" :key="i">
          <tr v-if="unaCompra.producto == unProducto.id">
          <td>{{cliente.nombre}}</td>
          <td class="bg-emerald-200">{{unProducto.nombre}}</td>
          <td>0</td>
          <td>${{unProducto.precio}}</td>
          <td class="bg-emerald-200">0.0</td>
          <td>0.0</td>
          <td class="bg-emerald-200">{{unProducto.precio}}</td>
          </tr> 
      </tbody>
  </table>
  </div>
</main>


<div id="app">
  <h1>Listado de Productos </h1>
  <div>
    v-for="currency in result"
    class="currency"
  >
    {{ currency.nombre }}:
    <span class="lighten">
      <span v-html="currency.precio"></span>{{ currency.tipo }}
    </span>
  </div>
</div>


<!-- <main>
<div>
<div class="row">
  <div class="col m12">
  <table class="table bordered striped" border="-1">
    <thead>
      <tr>
        <th>Direccion</th>
        <th>Ciudad</th>
        <th>Localidad</th>
        <th>Pago</th>
        <th>Jornada</th>
        <th>Telefono</th>
        <th>Fecha</th>
      </tr>
    </thead>
      <tbody>
          <tr v-for="usuario in usuarios" v-bind:key="usuario">
          <td>{{usuario.Direccion}} </td>
          <td>{{usuario.Ciudad}}</td>
          <td>{{usuario.Localidad}}</td>
          <td >{{usuario.Pago}}</td>
          <td>{{usuario.Jornada}}</td>
          <td>{{usuario.Telefono}}</td>
          <td>{{usuario.Fecha}}</td>
          </tr> 
      </tbody>
  </table>
  </div>
  </div>
</div>
</main> -->

</template>

<script>
import axios from "axios";
export default {

  data () {
    return {
      result: null
    }
  },
  /*
  mounted () {
    axios
      .get('http://localhost:8080/producto/todos')
      .then(response => (this.info = response))
  }*/

  created() {
    axios.get("http://localhost:8080/producto/todos").then((result) => {
      this.result = result.data;
    })
  }
};
</script>

<style scoped lang="scss">
</style>