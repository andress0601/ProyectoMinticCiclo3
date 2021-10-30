import axios from "axios";

class ProductoService{
    url="http://132.145.74.80:8080/producto";
    // Spring boot

    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
    }

}export default new ProductoService();