<template>
  <div
    class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
    style="
      background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
    "
  >
    <div class="container mx-auto">
      <div class="min-h-screen flex flex-col justify-center sm:py-4">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div class="px-8 py-12 bg-white w-full">
            <div class="mb-4 md:mr-2 md:mb-0">
              <h1>------------------------------------------</h1>
              <p class="italic focus:underline">EL SABOR DE NUESTRA TIERRA</p>
              <br />
              <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-9 italic">
                  <div>FECHA: 2021-10-04</div>
                  <div>HORA: 16:45:30</div>
                </div>
              </label>
            </div>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-4 ">
                  <div>NIT CLIENTE: </div>
                  <div>1005650577</div>
                </div>
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                  <div>NOMBRE CLIENTE: </div>
                
              </label>
            <label
                class="block mb-4 text-sm text-left text-gray-700"
                for="firstName"
              >
                  <div>ROBERTO ALVAREZ </div>
                
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                  <div>DATOS DE COMPRA</div>
                  <h1>------------------------------------------</h1>
              </label>

            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
          
                  <div>LISTA PRODUCTOS { </div>
                  
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>PRODUCTO : </div>
                  <div>PANDEYUCAS</div>
                  <div>CANT: 2</div>
                </div>
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>PRODUCTO : </div>
                  <div>FILETE PESCADO</div>
                   <div>CANT: 6</div>
                </div>
              </label>
            
            <label
                class="block mb-2 text-sm text-left text-gray-700"
                for="firstName"
              >
          
                  <div>} </div>
                  
              </label>
              <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>MEDIO DE PAGO: </div>
                  <div>EFECTIVO</div>
                   
                </div>
              </label>

              <label
                class="block mb-4 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>DIRECCION DOMICILIO: </div>
                  <div>CRA32 #123-12</div>
                   
                </div>
              </label>
              <label
                class="block mb-2 text-sm text-left text-gray-700"
                for="firstName"
              >
                  <h1>------------------------------------------</h1>
              </label>
              <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>DESCUENTO : </div>
                  <div> $23500</div>
                   
                </div>
              </label>
              <label
                class="block mb-2 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>TOTAL A PAGAR : </div>
                  <div>$235000</div>
                
                </div>
              </label>

               <label
                class="block mb-4 text-sm text-left text-gray-700"
                for="firstName"
              >
                  <h1>------------------------------------------</h1>
              </label>

               <label
                class="block mb-4 text-sm text-left text-gray-700 italic"
                
              >
                  <h1> HA SIDO UN GUSTO ATENDERTE</h1>
              </label>

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
              GRACIAS 
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2>{{ error }}</h2>
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
      ClienteService.registrarCliente(this.people)
        .then((respuesta) => {
          this.$router.push({ name: "Menu" });
        })
        .catch((error) => {
          console.log("Error Compra", error);
        });
      // this.$router.push({ name: "login" });
      // let ad = this.listado.push(this.people);
      // console.log(ad);
    },
  },
};
</script>
<style  scoped>
h2 {
  font-size: 3rem;
  font-style: initial;
  color: red;
}
</style>

