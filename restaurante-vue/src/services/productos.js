class ProducoService{
    productos=[];

    constructor(){//Cuando la coloco acá, ya me queda global
        this.productos=[
          {
            id: 1,
            nombre: "Pandeyucas(Tradicionales y crocanticos)",
            precio: 0,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
            tipo:"(Entrada)",
          },
          
          { 
            id:2,
            nombre: "Arepas(De maíz pelao)", 
            precio: 0,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada%202%20(1).png",
            tipo: "(Entrada)",
          },
          //PLATOS FUERTES
          {
            id: 3,
            nombre: "Cabro Con Pepitoria(Yuca, Arepa y Ensalada)",
            precio: 26000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/cabro-1-400x250.jpg",
            tipo:"(Plato Fuerte)",
          },
          
          { 
            id:4,
            nombre: "Filete de Pescado(Arroz Blanco, Patacón y Ensalada)", 
            precio: 30000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pescado(act).jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:5,
            nombre: "Sancocho de gallina(Arroz,aguacate y yuca)", 
            precio: 17000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/sancocho-de-gallina(ACT).jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:6,
            nombre: "Pollo asado(Yuca, Arepa, Papa y un delicioso ají)", 
            precio: 22000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pollo.jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:7,
            nombre: "Sobrebarriga(Al Horno: Yuca, Arepa y Ensalada)", 
            precio: 24000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/sobrebarriga%20act.jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:8,
            nombre: "Pechuga a la plancha(Papa a la Francesa y Ensalada)", 
            precio: 17000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pechuga%20act.jpg",
            tipo: "(Plato Fuerte)",
          },
          {
            id: 9,
            nombre: "Cazuela de Mariscos(Arroz Blanco y Patacón)",
            precio: 34000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/cazuela-act.jpg",
            tipo:"(Plato Fuerte)",
          },
          
          { 
            id:10,
            nombre: "Oreada(Arroz Blanco , Yuca, ensalada)", 
            precio: 19000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/oreada%20act.png",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:11,
            nombre: "Pavo relleno(Pure de papa y ensalada agridulce)", 
            precio: 34000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/pavo%20relleno%20act.jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:12,
            nombre: "Arroz Paisa(patacones y aguacate)", 
            precio: 21000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/arroz%20paisa.jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:13,
            nombre: "Ajiaco Santareño(arroz blanco y aguacate)", 
            precio: 24000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/ajiaco.jpg",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:14,
            nombre: "Bandeja Paisa", 
            precio: 17000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/Bandeja%20act.png",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:15,
            nombre: "Mute(Yuca, Arroz y aguacate)", 
            precio: 14000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/mute%20act.png",
            tipo: "(Plato Fuerte)",
          },
          { 
            id:16,
            nombre: "Arroz Con Pollo(papas a la Francesa y aguacate", 
            precio: 14000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/comidas/arroz-pollo.jpg",
            tipo: "(Plato Fuerte)",
          },
          {
            id: 17,
            nombre: "Pandeyucas(Tradicionales y crocanticos)",
            precio: 6000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/pandeyucas.jpg",
            tipo:"(Adicionales)",
          },
                    
          { 
            id:18,
            nombre: "Arepas(De maíz pelao)", 
            precio: 8000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/entrada%202%20(1).png",
            tipo: "(Adicionales)",
          },

          {
            id:19,
            nombre: "Hormigas Culonas(Platillo  exquisito (30gr))",
            precio: 12000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/c.jpg",
            tipo: "(Adicionales)",
          },

          { 
            id:20,
            nombre: "Papas Fritas(Bien crujientes)", 
            precio: 7000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Papas%20fritas.jpg",
            tipo: "(Adicionales)",
            },

          {
            id:21,
            nombre: "Patacones(De los mejores plátanos)",
            precio: 7000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Adicionales/Captura%203.PNG",
            tipo: "(Adicionales)",
          },

          //BEBIDAS 
          {
            id:22,
            nombre: "Agua Cristal con gas",
            precio: 1800,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/cristal%20gas.jpg",
            tipo: "(Bebidas)",
          },

          {
            id:23,
            nombre: "Agua Cristal",
            precio: 1200,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/cristal.png",
            tipo: "(Bebidas)",
          },
          {
            id:24,
            nombre: "Agua Manzana",
            precio: 2300,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/brisa%20manzana.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:25,
            nombre: "Aguapanela 1,5 lts",
            precio: 1800,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/aguapanela.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:26,
            nombre: "Pony Malta 1.5 lts",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/pony.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:27,
            nombre: "Cocacola 1.5 lts",
            precio: 3500,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/coca%20cola.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:28,
            nombre: "Combo :Sprit,Cocacola,Fanta",
            precio: 6000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/bebidas.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:29,
            nombre: "Colombiana Postobon 1.5 lts",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/colombiana.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:30,
            nombre: "Kola Postobon 1.5 lts",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/gaseosa_kola_postobon.png",
            tipo: "(Bebidas)",
          },
          {
            id:31,
            nombre: "Manzana Postobon 3lts",
            precio: 6000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/manza.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:32,
            nombre: "Naranja Postobon 1.5 lts",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/naranja.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:33,
            nombre: "Uva Postobon 1.5 lts",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/uva.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:34,
            nombre: "Seven up Postobon 3lts",
            precio: 6000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/seven%20up.png",
            tipo: "(Bebidas)",
          },
          {
            id:35,
            nombre: "Hit mango",
            precio: 2700,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hit%20mango.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:36,
            nombre: "Hit Mora",
            precio: 2700,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hit%20mora.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:37,
            nombre: "Hit Tropical",
            precio: 2700,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/hot%20tropical.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:38,
            nombre: "Jugos Naturales",
            precio: 2100,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/jugos%20naturales.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:39,
            nombre: "Limonada Natural",
            precio: 2500,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/limonada.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:40,
            nombre: "Lulada",
            precio: 2500,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/lulada.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:41,
            nombre: "Cerveza Aguila",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/aguila-cerveza.png",
            tipo: "(Bebidas)",
          },
          {
            id:42,
            nombre: "Club Colombia  black",
            precio: 7000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/black.png",
            tipo: "(Bebidas)",
          },
          {
            id:43,
            nombre: "Club Colombia Dorada",
            precio: 7000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/dorada.png",
            tipo: "(Bebidas)",
          },
          {
            id:44,
            nombre: "Cerveza Costeña (und)",
            precio: 4000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/COSTE%c3%91A.jpg",
            tipo: "(Bebidas)",
          },
          {
            id:45,
            nombre: "Cerveza Poker",
            precio: 3000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/poker-x400.png",
            tipo: "(Bebidas)",
          },
          {
            id:46,
            nombre: "Heineken ",
            precio: 2500,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/bebidas/heineken.jpg",
            tipo: "(Bebidas)",
          },

          //ESPECIALES 
          {
          id:47,
          nombre: "Combo plato típico (Carne Oreada,Cabro,Rellena,Chorizo,Pepitoria,Arepa,Yuca y Ensalada)",
          precio: 43900,
          link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/combo%201.jpg",
            tipo:"(Especiales)",
          },
          {
            id:48,
            nombre: "Combo fritanga mediana (Chorizo,Rellena,Lomo de Cerdo,Costillitas de Cerdo,Chicharrón,Papa criolla y Maduro)",
            precio: 36900,
            link:"https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/combo%203.png",
            tipo:"(Especiales)",
          },
          {
            id:49,
            nombre: "Champagne vino espumoso (Ideal para tus momentos especiales)",
            precio: 73000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/champagne%20vino%20espumoso%2073000.png",
            tipo:"(Especiales)",
          },
          {
            id:50,
            nombre: "Champagne smirnoft (Champagne con sabores a naranja y lulo)",
            precio: 45000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/champa%c3%b1a.jpg",
            tipo:"(Especiales)",
          },
          {
            id:51,
            nombre: "Champaña Francesa Moet & chandon Brut imperial",
            precio: 273900,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/Champa%c3%b1a%20Francesa%20Moet%20&%20chandon%20Brut%20imperial.png",
            tipo:"(Especiales)",
          },
          {
            id:52,
            nombre: "Maipo Vino tinto cabernet sauvignon",
            precio: 73000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/maipo%20vino%20tinto%20cabernet%20sauvignon.jpg",
            tipo:"(Especiales)",
          },
          {
            id:53,
            nombre: "Vino tinto merlot",
            precio: 57000,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/vino-tinto-montes-classic-series-merlot.jpg",
            tipo:"(Especiales)",
          },
          {
            id:54,
            nombre: "Vino blanco Santa Helena",
            precio: 38650,
            link: "https://el-sabor-de-nuestra-tierra.000webhostapp.com/imagenes/Especiales/Vinos-blanco_santa%20helena.jpg",
            tipo:"(Especiales)",
          },
        ];

        
    }

    obtenerTodos(){//me regresa información
        return this.productos;
    }

}export default new ProducoService();



