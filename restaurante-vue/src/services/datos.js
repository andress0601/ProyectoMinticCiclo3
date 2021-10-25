import axios from "axios";

class EnvioService{
    url="http://localhost:8080/envio";

    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
    }
    

    registrarDatos(reservation){
        return axios.post(`${this.url}`,reservation);
    }
}
export default new EnvioService();