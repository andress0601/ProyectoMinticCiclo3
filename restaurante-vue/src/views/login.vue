<template>
  <div  class="bg-fixed bg-cover bg-center bg-no-repeat h-full w-full lg:p-8"
      style="
        background-image: url(https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/restaurante/menu-art.jpg);
      " >
   
      <div class="container mx-auto">
        <div
          action="#"
          method="POST"
          class="bg-no-repeat mx-100 my-40 py-10 bg-top h-60"
          style="
            background-image: url('https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/login-register/imagenLogin.PNG');
          "
        >
          <!-- component -->

          <br /><br /><br />
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

            <!-- <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>   -->
          </div>
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

          <h2 id="aviso">{{ error }}</h2>
        </div>
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