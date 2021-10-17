<template>
  <div  class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
      style="
        background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
      " >
   
      <div class="container mx-auto">
        <!-- <div
          action="#"
          method="POST"
          class="bg-no-repeat mx-100 my-40 py-10 bg-top h-60"
          style="
            background-image: url('https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/login-register/imagenLogin.PNG');
          "
        > -->
        <!-- component -->
<div class="min-h-screen flex flex-col justify-center sm:py-2">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5 bg-no-repeat mx-100 my-40 py-10 bg-top h-60" style="background-image: url('https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/login-register/imagenLogin.PNG');"></h1>  
    
      <div class="px-5 py-7">
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="usuario"
                placeholder="Username" />
        
        <label class="font-semibold text-sm text-gray-600 pb-1 block" >Password</label>
        <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="password"
                placeholder="******************" />

        
        <!-- <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button> -->
      <button
            @click.prevent="iniciar"
            class="
              lg:p-4
              bg-gradient-to-r
              from-green-300
              to-blue-400
              hover:from-gray-400 hover:to-gray-800
              text-gray-800
              font-semibold
              lg:m-4
              py-8
              px-4
              border border-gray-600
              rounded
              shadow-2x1
            "
          >
            Sign In
          </button>
      </div>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span class="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
          <div class="text-center sm:text-right  whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span class="inline-block ml-1">Sign up</span>
            </button>
          </div>
        </div>
      </div>
 
    <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button   class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1">back</span>
            </button>
          </div>
        </div>
      </div>
  </div>
</div>
          <!-- component -->

          <!-- <br /><br /><br />
          <br /><br /><br />
          <div
            class="bg-blue shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-grey-darker
                "
                v-model="usuario"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class=" text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border border-red
                  rounded
                  w-full
                  py-2
                  px-3
                  text-grey-darker
                  mb-3
                "
                v-model="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red text-xs italic">Please choose a password.</p>
            </div>

            <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>   
          </div> -->
          <!-- <button
            @click.prevent="iniciar"
            class="
              lg:p-4
              bg-gradient-to-r
              from-green-300
              to-blue-400
              hover:from-gray-400 hover:to-gray-800
              text-gray-800
              font-semibold
              lg:m-4
              py-8
              px-4
              border border-gray-600
              rounded
              shadow-2x1
            "
          >
            Sign In
          </button> -->

          <h2 id="aviso">{{ error }}</h2>
        <!-- </div> -->
      </div>
   
  </div>
</template>

<script>
import ClienteService from "@/services/clientes.js";
export default {
  methods: {
    iniciar() {
      ClienteService.validar(this.usuario, this.password);

      this.cliente = ClienteService.obtenerCliente();

      if (this.cliente.nombre) {
        this.$router.push({ name: "Menu" });
      } else {
        this.error = alert("datos inválidos");
      }
    },
  },
  data() {
    return {
      titulo: "Inicia sesión",
      usuario: "",
      password: "",
      cliente: {},
      error: "",
    };
  },
};
</script>
<style>
#aviso {
  font-weight: bold;
  color: #db0d0d;
}
</style>