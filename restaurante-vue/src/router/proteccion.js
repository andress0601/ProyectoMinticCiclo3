const isAutenticado= (origen, destino, accion)=>{

    if (localStorage.cliente) {
        accion();
    } else {
        accion({name:"login"});//seguridad-extra para que solo acceda a las rutas si ya está logueado
    }

};
export default isAutenticado;

// Guard
