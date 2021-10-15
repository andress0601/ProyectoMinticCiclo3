class ProducoService{
    productos=[];

    constructor(){//Cuando la coloco acá, ya me queda global
        this.productos=[
             { nombre: "Pandeyucas(Tradicionales y crocanticos)", precio: 0,
             link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
             tipo:"(Entrada(Incluida con plato fuerte))"}, 
             
             { nombre: "Arepas(De maíz pelao)", precio: 0, 
             link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada%202%20(1).png",
             tipo:"(Entrada(Incluida con plato fuerte))", },
             {
                nombre: "Cabro Con Pepitoria(Yuca, Arepa y Ensalada)", precio: 26000,
                link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/cabro-1-400x250.jpg",
                tipo:"(Plato Fuerte)",
              },
              { 
                id:4,
                nombre: "Filete de Pescado(Arroz Blanco, Patacón y Ensalada)", precio: 30000,
                link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pescado(act).jpg",
                tipo: "(Plato Fuerte)"
              }
        ];

        
    }

    obtenerTodos(){//me regresa información
        return this.productos;
    }

}export default new ProducoService();