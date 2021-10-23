const datasecurity = (origen, destino, accion)=>{

    if (localStorage.cliente) {
        accion();
    } else {
        accion({name:"login"});//seguridad-extra para que solo acceda alas rutas si ya está logueado
    }

};
export default datasecurity;

// Guard
