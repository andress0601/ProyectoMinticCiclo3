
<template>
  <div class="home">
   
      <title class="text-4xl lg:p-4">{{titulo}}</title>

   <body class="bg-fixed bg-cover bg-center bg-no-repeat h-768 w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
   
   >
      <div>
      <form action="#" id="f1">
           
           <label for="producto">Producto:</label>
          <select name="producto" id="productos" v-model="seleccion">
          
                <option value="-1"> Seleccione una Categoria </option>
        
                <option value="Entradas">- ENTRADAS -</option>
                <option value="PlatosFuertes">PLATOS FUERTES</option>
                <option value="Adicionales">ADICIONALES</option>
                <option value="Bebidas">BEBIDAS</option>
                <option value="Especiales">ESPECIALES</option>
            
          </select>

        </form>
      </div>
   </body>
  </div>

  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  },
  data(){
    return{
      titulo:"Bienvenido al sabor de nuestra Tierra"
    }
  }
}
</script>
<style scoped>

#f1 {
  display: grid;
  grid-template-columns: 6rem 10rem;
  row-gap: 1rem;
}
body {
  display: grid;
  grid-template-columns: 4fr 8fr;
  column-gap: 1rem;
  padding: 2rem;
}

</style>
