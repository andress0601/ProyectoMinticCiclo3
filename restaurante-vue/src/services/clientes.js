import axios from "axios";

class ClienteService{
    url="http://localhost:8080/cliente";

    validar(miUsuario, miPassword){
        let datos = {
            usuario: miUsuario,
            password: miPassword
        };
        return axios.post(`${this.url}/validar`, datos);
    }

    obtenerCliente(){

        let id = localStorage.cliente;
        return axios.get(`${this.url}/${id}`);
    }
    
   
   
    regresarCliente(nombre){

        let id = localStorage.cliente;
        return axios.get(`${this.url}/${id}`, nombre);
    }
   
    registrarCliente(people){
        return axios.post(`${this.url}`, people);
    }
    

}export default new ClienteService();