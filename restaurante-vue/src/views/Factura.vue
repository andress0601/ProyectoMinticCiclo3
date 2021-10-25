<template>
  <div
    class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
  >
    <div class="container mx-auto">
      <div class="min-h-screen flex flex-col justify-center sm:py-2">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div class="px-16 py-12 bg-white">
            
              <div class="mb-6 md:mr-4 md:mb-0">
            
                <label
                  class="block mb-2 text-sm text-left font-bold text-gray-700"
                  for="firstName"
                >
                  Nombre
                </label>
                <h1
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
                  
                  required
                  type="text"
                  placeholder="usuario"
                />
              </div>
            
             <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  CellPhone
                </label>
                <h1
                  
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
                  
                />
              </div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Produtos</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />

             <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Cantidad</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />
             <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Dirección</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />
             <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >JornadaEnvio</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />
             <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Descuentos</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />
             <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Total Compra</label
            >
            <h1
              required
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
             
            />


            

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
              Gracias por tu compra :)
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2 >{{ error }}</h2>
  </div>
</template>

<script>
import ClienteService from "@/services/clientes.js";

export default {
  mounted() {
 
    this.cliente = ClienteService.registrarCliente();
     
  },

  data() {
    return {
      people: {
        nombre: "",
        cellPhone: "",
        usuario: "",
        password: "",
        passwordR: "",
        error: "",
        address: "",
        

      },

    };
  },
  methods: {
    registro() {
  

         ClienteService.registrarCliente(this.people).then((respuesta)=>{
            this.$router.push({name:"Menu"});
        }).catch((error)=>{
            console.log("Error Compra",error);
        });
        // this.$router.push({ name: "login" });
        // let ad = this.listado.push(this.people);
        // console.log(ad);
      
    
      
    }
    
  },
};
</script>
<style  scoped>
h2{
   font-size: 3rem;
  font-style: initial;
  color: red;
}
</style>

