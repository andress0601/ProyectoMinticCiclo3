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
              <p class="italic focus:underline font-bold ">EL SABOR DE NUESTRA TIERRA</p>
              <br />
              <label
                class="block mb-0 text-sm text-left text-gray-700"
               
              >
                <div class="flex space-x-9 italic">
                  <div >FECHA: {{envio.fecha}} </div>
                  <div > HORA: {{envio.hora}}</div>
                </div>
              </label>
            </div>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
               
              >
                <div class="flex space-x-4 ">
                  <div class="font-medium  " >NIT CLIENTE: </div>
                  <div>1005650577</div>
                </div>
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                
              >
                  <div class="font-medium " >NOMBRE CLIENTE: </div>
                
              </label>
            <label
                class="block mb-0 text-sm text-left text-gray-700"
              
              >
                  <div><p>{{clientes.nombre}}</p></div>
                
              </label>
               <label
                class="block mb-0 text-sm text-left text-gray-700"
               
              >
                <div class="flex space-x-2 ">
                  <div class="font-semibold  " >CIUDAD: </div>
                  <div>{{envio.ciudad}}</div>
                  
                  
                </div>
              </label>
               <label
                class="block mb-0 text-sm text-left text-gray-700"
                
              >
                <div class="flex space-x-2 ">
                  
                  <div class="font-semibold " >LOCALIDAD: </div>
                  <div>{{envio.localidad}}</div>
                  
                </div>
              </label>
               <label
                class="block mb-4 text-sm text-left text-gray-700"
               
              >
                <div class="flex space-x-2 ">
                  <div>TEL CEL: </div>
                  <div>{{envio.telefono}}</div>
                
                </div>
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
               
              >
          
                  <div>LISTA PRODUCTOS { </div>
                  
              </label>
           
            <label
                class="block mb-0 text-sm text-left text-gray-700"
                
              >
                <div class="flex space-x-3 ">
                  <div>PRODUCTO : </div>
                  <div>{{compra.listaProductos}}</div>
                   <div>CANT: {{compra.cantidad}}</div>
                </div>
              </label>
            
            <label
                class="block mb-2 text-sm text-left text-gray-700"
                
              >
          
                  <div>}</div>
                  
              </label>
              <label
                class="block mb-0 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>MEDIO DE PAGO: </div>
                  <div>{{envio.tipoPago}}</div>
                   
                </div>
              </label>

              <label
                class="block mb-4 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>DIRECCION DOMICILIO: </div>
                  <div>{{envio.direccion}}</div>
                   
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
                  <div> ${{compra.descuento}}</div>
                   
                </div>
              </label>
              <label
                class="block mb-2 text-sm text-left text-gray-700"
                for="firstName"
              >
                <div class="flex space-x-3 ">
                  <div>TOTAL A PAGAR : </div>
                  <div>${{compra.total}}</div>
                
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
              @click.prevent="Ventas(), prueba()"
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
              Revisar Factura 
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2>{{ error }}</h2>
  </div>
  <p>{{compras}}</p>
  <p>{{clientes}}</p>
 
</template>

<script>
// import ClienteService from "@/services/clientes.js";
import axios from "axios";
import ClienteService from "@/services/clientes.js";

import MetodosService from "../services/metodos.js";

export default {
  mounted() {

    MetodosService.metodoUno().then((respuesta)=>{
          this.compras=respuesta.data;
      }).catch((error)=>{
          console.log("Error Compras",error);
      });

      ClienteService.obtenerCliente().then((respuesta)=>{
        this.clientes=respuesta.data;
    });
      // this.cliente = ClienteService.obtenerCliente();

      //  axios
      //   .get(`http://localhost:8080/envio/cliente/${idcompra}` )
      //   .then(response => (this.envios = response.data));
    // this.cliente = ClienteService.registrarCliente();
  },
  data() {
    return {
      envio:{
        fecha:'',
        hora:'',
        tipoPago:'',
        ciudad:'',
        localidad:'',
        telefono:'',
        compra_id:0,
        direccion:''
      },
      compra:{
        cantidad:'',
      
        descuento:'',
        listaProductos:{},
        
        total:''
      },
      clientes:{
        nombre:''
      },
      compras:{},
      envios:{},
      producto:[],
      lProductos:[]
    };
  },
  
  methods: {
    // registro() {
    //   // ClienteService.registrarCliente(this.people)
    //   //   .then((respuesta) => {
    //       this.$router.push({ name: "Menu" });
    //     // })
    //     // .catch((error) => {
    //     //   console.log("Error Compra", error);
    //     // });
  
    // },
     Ventas(){
      this.compra = this.compras[this.compras.length-1];
      let idcompra = this.compras[this.compras.length-1].id;
      
      axios
        .get(`http://localhost:8080/envio/cliente/${idcompra}` )
        .then(response => (this.envios = response.data));

     

    },
    prueba(){
      
      this.envio.fecha = this.envios[0].fecha ;
      this.envio.hora =this.envios[0].hora ;
      this.envio.tipoPago = this.envios[0].tipoPago ;
      this.envio.direccion =this.envios[0].direccion ;
      this.envio.ciudad =this.envios[0].ciudad ;
      this.envio.localidad =this.envios[0].localidad ;
      this.envio.telefono =this.envios[0].telefono ;
      this.envio.compra_id = this.envios[0].compra_id ;
      

      let arr = this.compra.listaProductos.split(' ');
      
      for (var j = 0; j < arr.length-1; j++) {
        this.producto.push(arr[j]);
        return(arr[j]);
      }
    }  
  }
};
</script>
<style  scoped>
h2 {
  font-size: 3rem;
  font-style: initial;
  color: red;
}
</style>

