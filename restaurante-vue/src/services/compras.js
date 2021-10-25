class CompraService{
    url="http://localhost:8080/compra";
    Compras=[];

    constructor(){
        this.compras=[
            
        ];

        
    }

    obtenerTodos(){
        return this.compras;
    }

    obtenerCompra(id){
        return axios.get(`${this.url}/${id}`);
    }

}export default new CompraService();