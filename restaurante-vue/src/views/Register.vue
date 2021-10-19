<template>
    
  <div  class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
      style="
        background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
      " >
   
      <div class="container mx-auto">
     
<div class="min-h-screen flex flex-col justify-center sm:py-2">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
     
    
      <div class="px-5 py-7 bg-gray-400">
        <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        class="
                          w-full
                          px-3
                          py-2
                          text-sm
                          leading-tight
                          text-gray-700
                          border
                          rounded
                          shadow
                          appearance-none
                          focus:outline-none focus:shadow-outline
                        "
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="lastName"
                      >
                        Tel.Celular
                      </label>
                      <input
                        class="
                          w-full
                          px-3
                          py-2
                          text-sm
                          leading-tight
                          text-gray-700
                          border
                          rounded
                          shadow
                          appearance-none
                          focus:outline-none focus:shadow-outline
                        "
                       
                        type="text"
                        placeholder="N°Cel"
                      />
                    </div>
                  </div> 
        <label class="font-semibold text-sm text-gray-600 pb-1 block">documento</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="usuario"
                placeholder="Documento I" />

        <label class="font-semibold text-sm text-gray-600 pb-1 block">Dirección</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="usuario"
                placeholder="Dirección" />
        
        

        
   
      <button
            @click.prevent="registro"
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
            Validar
          </button>
      </div>
     
 
   
  </div>
</div>
         

      </div>
   
  </div>
</template>

<script>

export default {
  methods: {
     registro() {
      this.$router.push({ name: "login" });
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
  }
};
</script>
<style>
#aviso {
  font-weight: bold;
  color: #db0d0d;
}
</style>