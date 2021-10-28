import axios from "axios";

class MetodosService{
    url="http://localhost:8080";
    
    metodoUno(){
        let id = localStorage.cliente;

        //compras de un cliente especifico    
        return axios.get(`${this.url}/compra/cliente/${id}`);
    }

    // metodoDos(idCompra){
    //     //
    //     return axios.get(`${this.url}/envio/cliente/${idCompra}`);

    // }
    // dataVentas(){
    //     let id = localStorage.cliente;
    //     //compras de un cliente especifico    
    //     axios
    //         .get(`${this.url}/compra/cliente/${id}`)
    //         .then(response => (this.compra = response.data));
    //     var idUltimaCompra= this.compra[this.compra.length-1].id;

    //     //envios de una compra especifica            
    //     axios
    //         .get(`${this.url}/envio/cliente/${idUltimaCompra}` )
    //         .then(response => (this.envio = response.data));

    //     //cliente conectado
    //     axios
    //         .get(`${this.url}/cliente${id}` )
    //         .then(response => (this.cliente = response.data));

    //     //ultima compra de un usuario especifico
    //     var ultimaCompra= this.compra[this.compra.length-1];            
    //     var ultimoEnvio= this.envio[this.envio.length-1];
    //     let datos = [ultimaCompra,ultimoEnvio];
    //     return datos;
    // }

    // dataVentasProductos(){
    //     //producto
    //     axios
    //         .get(`${this.url}/producto/${id}`)
    //         .then(response => (this.producto = response.data));
    // }
}export default new MetodosService();