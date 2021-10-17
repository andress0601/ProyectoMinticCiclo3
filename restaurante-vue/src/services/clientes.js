class ClienteService{
    cliente={};
    listado=[];

    constructor(){
        this.listado=[
            {nombre:"Roberto", usuario:"roberto", password:"123"},
            {nombre:"Stephani", usuario:"stepha", password:"456"},
            {nombre:"Guillermo", usuario:"guillermo", password:"789"},

        ]
    }
    
    validar(usuario, password){
        for (const unCliente of this.listado) {
            if (unCliente.usuario==usuario&&unCliente.password==password) {
                this.cliente=unCliente;
                break;
            }else{
                this.cliente={}
                
            }
        }
    }
    //retorna
    obtenerCliente(){
        return this.cliente;
    }

}export default new ClienteService();