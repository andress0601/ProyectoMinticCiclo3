<template>


<body class="bg-fixed bg-cover bg-center bg-no-repeat h-68 w-full lg:p-16"
    style="background-image: url(https://userscontent2.emaze.com/images/f1d285b2-061c-479b-a343-bb045bbbc074/e340fec4af21648450c67a2ca50b4a79.jpg);
    ">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
 <header> 
          <!-- <p class="text-center"><img width="356px" src="https://crustier-twists.000webhostapp.com/imagenes/propuesta.png"
          alt="Logo_restaurante"/></p> -->
          <div class="text-center"> 
            <h1> GRACIAS POR ELEGIR NUESTROS PRODUCTOS </h1>
          </div>
          <div class="fst-italic">
              <div class="text-center">
                <div class="leading-snug ...">
                      <h3>Recuerda que nuestro horario de atencion es de 11am a 4pm</h3>   
                </div>
              </div>
          </div>  
<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    ---------------
  </span>
</div>


 </header>

<div>
<transition name= "fade">
  <div class="modal-overlay" v-if="showModal"></div>
</transition>

<transition name= "fade">
  <div class="modal" v-if="showModal">
    <h2>Solicita una reserva</h2>
    <div>
      <form @submit="AgregarSolicitud" action="#" method="POST" class="w-full max-w-lg" >
  <div class="flex flex-wrap -mx-3 mb-6">

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fecha">
        Fecha
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="fecha" type="date">
      <p class="text-red-500 text-xs italic">coloca la fecha que quieres recibir tu pedido</p>
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="envio">
        Tipo de Envio
      </label>
      <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-50 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <input  type="radio" name="reserva" value="M" v-model="Jornada0"> Jornada mañana
      </div>
      <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-50 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <input type="radio" name="reserva" value="T" v-model="Jornada1"> Jornada Tarde
      </div>
    </div>

<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="envio">
        Tipo de Envio
      </label>
      <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-50 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <input type="radio" name="reserva" value="C" v-model="Pago0"> Contra entrega
          <input type="radio" name="reserva" value="T" v-model="Pago1"> Tarjeta debito o credito
      </div>
    </div>
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Direccion">
        Direccion para el domicilio
      </label>
      <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="Direccion" >
      <p class="text-gray-600 text-xs italic">El domicilio se entregara a esta direccion</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Ciudad
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="Ciudad">
          <option>Bogotá</option>
        </select>    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Localidad
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="Localidad">
            <option>Usaquén</option>
            <option>Chapinero</option>
            <option>Santa Fe</option>
            <option>San Cristobal</option>
            <option>Usme</option>
            <option>Tunjuelito</option>
            <option>Bosa</option>
            <option>Kennedy</option>
            <option>Fontibón</option>
            <option>Engativá</option>
            <option>Suba</option>
            <option>Barrios Unidos</option>
            <option>Teusaquillo</option>
            <option>Los Mártires</option>
            <option>Antonio Nariño</option>
            <option>Puente Aranda</option>
            <option>La candenlaria</option>
            <option>Rafael Uribe Uribe</option>
            <option>Ciudad Bolivar</option>
            <option>Sumapaz</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Telefono
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="Telefono" type="text">
    </div>
  </div>
</form>
    </div>
    <button  @click="showModal =false" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Cerrar
    </button>
      <div>
        <transition name ="fade">
          <div class="modal-overlay" v-if="showModal3"></div>
      </transition>
      <transition name="fade">
        <div class="modal" v-if="showModal3">

      <div role="alert">
        <div class="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
         ENHORABUENA, HAZ REGISTRADO TU RESERVA
        </div>
        <div class="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
          <p>¡¡Tu producto llegará según lo hayas programado!!</p>
          <div class="text-black">
          <router-link :to="{name:'Factura'}" >
            Descargar_factura
            </router-link>
          </div>
              <button  @click="showModal =false" class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Cerrar
              </button>
        </div>
      </div>

        </div>
      </transition>
      <button type="submit" @click="showModal3 =true" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Guardar
      </button>
      </div>
  </div>
</transition>
<button  @click="showModal =true" class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Solicita tu reserva
</button>
</div>

<div>
<transition name= "fade">
  <div class="modal-overlay" v-if="showModal2"></div>
</transition>
<transition name= "fade">
  <div class="modal"  v-if="showModal2">
    <h2>Confirma tu compra </h2>
    <form class="w-full max-w-lg">   
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Horario disponible
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>11am -12pm</option>
          <option>12pm -1pm</option>
          <option>2pm -3pm</option>
          <option>3pm -4pm</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="envio">
        Tipo de Envio
      </label>
      <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-50 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <input type="radio" name="reserva" value="C"> Contra entrega
      </div>
      <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-50 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <input type="radio" name="reserva" value="T"> Tarjeta debito o credito
      </div>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Direccion para el domicilio
      </label>
      <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" >
      <p class="text-gray-600 text-xs italic">El domicilio se entregara a esta direccion</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Ciudad
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Bogotá</option>
        </select>    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Localidad
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>Usaquén</option>
            <option>Chapinero</option>
            <option>Santa Fe</option>
            <option>San Cristobal</option>
            <option>Usme</option>
            <option>Tunjuelito</option>
            <option>Bosa</option>
            <option>Kennedy</option>
            <option>Fontibón</option>
            <option>Engativá</option>
            <option>Suba</option>
            <option>Barrios Unidos</option>
            <option>Teusaquillo</option>
            <option>Los Mártires</option>
            <option>Antonio Nariño</option>
            <option>Puente Aranda</option>
            <option>La candenlaria</option>
            <option>Rafael Uribe Uribe</option>
            <option>Ciudad Bolivar</option>
            <option>Sumapaz</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Telefono
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
  
</form>
    <button  @click="showModal2 =false" class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Cerrar
    </button>
    <div>
        <transition name ="fade">
          <div class="modal-overlay" v-if="showModal3"></div>
      </transition>
      <transition name="fade">
        <div class="modal" v-if="showModal3">
        
        <div role="alert">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    GRACIAS POR TU COMPRA
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>¡Tu domicilio llegará muy pronto!!</p>

  <div class="text-black">
    <router-link :to="{name:'Factura'}">
      Descargar_factura
      </router-link>
  </div>

        <button  @click="showModal2 =false" class=" bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Cerrar
        </button>
  </div>
</div>

        </div>
      </transition>
      <button  @click="showModal3 =true" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Guardar
      </button>
      </div>
  </div>
  
</transition>

<button @click="showModal2 =true" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Confirma Compra
  </button>
</div>

</body>

</template>

<script>


export default {
 
   
    data(){
      return{
        showModal:false,
        showModal2:false,
        showModal3:false,
        // Direccion: '',
        // Fecha: '',
        // Ciudad: '',
        // Localidad: '',
        // Telefono:'',
        // Jornada: '',
        // Pago:'',
        // usuarios:[],

        // select_instances:[]
      }
    },
    
    methods: {
    cerrarSesion(){//para no dejar registros de nada
      localStorage.clear();//me limpia todas las varibles que tenía e dicha sesión
      this.$router.push({name:"login"});
    }

}
}
            
</script>


<style scoped>

h4{
  font-size: 3rem ;
  font-style: italic;
  color: #DF2E2E;
  

}

h2{
  font-size: 3rem;
  font-style: initial;
  color: red;
}

h3 {
  font-size: 1.5rem;
  font-style: italic;
  color: #DF2E2E;

  
}

h1{
  font-size: 3rem;
  font-style: initial;
  color: #233142;
}

.modal-overlay{
  position: absolute;
  top: 0;
  left:0;
  bottom:0;
  right: 0;
  z-index: 100;
  background:rgba(35, 49, 66, 0.4)
}

.modal{
  z-index: 101;
  background: #FFF;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 20px;
  transform: translate(-50%,-50%);
  position: fixed;
  top:50%;
  left: 50%;


}
    
/* fade-enter{
} */




</style>
