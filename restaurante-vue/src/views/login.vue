<template>
    
  <div  class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
      style="
        background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
      " >
   
      <div class="container mx-auto">
     
<div class="min-h-screen flex flex-col justify-center sm:py-2">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
     
    
      <div class="px-5 py-7 bg-gray-400">
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="usuario"
                placeholder="Username" />
        
        <label class="font-semibold text-sm text-gray-600 pb-1 block" >Password</label>
        <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="password"
                placeholder="****************" />

        
   
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
            <router-link  class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset inline-block ml-1" :to="{name:'register'}">
             Forgot Password!</router-link>
            
          </div>
          <div class="text-center sm:text-right  whitespace-nowrap">
            
            <router-link  class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset inline-block ml-1" :to="{name:'register'}">
             No tienes cuenta? Registrate!</router-link>
          </div>
        </div>
      </div>
 
    <!-- <div class="py-5">
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
      </div> -->
          <h2 id="aviso">{{ error }}</h2>
  </div>
</div>
         

        <!-- </div> -->
      </div>
   
  </div>
</template>

<script>
import ClienteService from "@/services/clientes.js";
export default {
  methods: {
    iniciar(){
      
      ClienteService.validar(this.usuario, this.password).then((respuesta)=>{

        if(respuesta.data.nombre){
         
          localStorage.cliente = respuesta.data.id;

          this.$router.push({name:"Menu"});
        }else{
          this.error="Datos inválidos";
        }
      });
  

    }
   
  },
  data() {
    return {
      titulo: "Inicia sesión",
      usuario: "",
      password: "",
      
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