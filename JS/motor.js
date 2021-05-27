var contador=0;

var movil=[
    {
        imagen:"IMG/galaxyA50 1.png",
        imagen2:"IMG/galaxyA50 2.png",
        nombre:"Samsung Galaxy A50",
        pequeno:100,
        mediano:200,
        grande:300
    },

    {
        imagen:"IMG/xiaomiredminote8t 2.png",
        imagen2:"IMG/xiaomiredminote8t 1.png",
        nombre:"Xiaomi Red MI NOTE 8T ",
        pequeno:150,
        mediano:250,
        grande:350
    },

    {
        imagen:"IMG/huaweiP30pro 1.png",
        imagen2:"IMG/huaweiP30pro 2.png",
        nombre:"Huawei P30",
        pequeno:125,
        mediano:225,
        grande:325
    },

    {
        imagen:"IMG/sonyexperia L3 1.png",
        imagen2:"IMG/sonyexperia L3 2.png",
        nombre:"Sony Experia L3",
        pequeno:125,
        mediano:225,
        grande:325
    },

    {
        imagen:"IMG/nokia71 1.png",
        imagen2:"IMG/nokia71 2.png",
        nombre:"Nokia 71",
        pequeno:125,
        mediano:225,
        grande:325
    },

    {
        imagen:"IMG/galaxynote10lite 1.png",
        imagen2:"IMG/galaxynote10lite 2.png",
        nombre:"Samsung Galaxy NOTE 10 Lite",
        pequeno:150,
        mediano:250,
        grande:350
    },

    {
        imagen:"IMG/lg-v30-frontal.png",
        imagen2:"IMG/lg-v30-trasera.png",
        nombre:"LG V30 ",
        pequeno:150,
        mediano:250,
        grande:350
    },

    {
        imagen:"IMG/alcatel-1x-2019 1.png",
        imagen2:"IMG/alcatel-1x-2019.png",
        nombre:"LG V30 ",
        pequeno:150,
        mediano:250,
        grande:350
    },

    {
        imagen:"IMG/iphone-11 1.png",
        imagen2:"IMG/iphone-11 2.png",
        nombre:"LG V30 ",
        pequeno:150,
        mediano:250,
        grande:350
    },
];

lista=[];

pintar();
function pintar(){
    for(let x=0; x<movil.length; x++){
        document.getElementById("contenedor").innerHTML+=` 
    <div class="caja">
        <div id="rojo${x}" class="rojo">${movil[x].pequeno}€</div>
        <div class="foto">
            <img src="${movil[x].imagen}" alt="" id="mifoto${x}"
        </div>
        <div class="detalles">
            <div class="boton">
                <input type="radio" name="a${x}" onclick="cambiafoto(${x})" id="fotoA${x}" checked>
                <input type="radio" name="a${x}" onclick="cambiafoto(${x})" id="fotoB${x}">
            </div>
            <div class="nombre">
                ${movil[x].nombre}
            </div>
            <div class="megas">
                <input type="radio" name="b${x}" onclick="cambiaprecio(${x})" id="tamanop${x}" checked>32GB
                <input type="radio" name="b${x}" onclick="cambiaprecio(${x})" id="tamanom${x}">64GB
                <input type="radio" name="b${x}" onclick="cambiaprecio(${x})" id="tamanog${x}">128GB
            </div>

            <div class="compra">
                <button onclick="anadircarrito(${x})" id="comprar">Comprar</button>
            </div>
        </div>
    </div>`
    }
}

function cambiafoto(posicion) {

    if (document.getElementById(`fotoA${posicion}`).checked) {
            document.getElementById(`mifoto${posicion}`).src=movil[posicion].imagen
    }
    if (document.getElementById(`fotoB${posicion}`).checked) {
        document.getElementById(`mifoto${posicion}`).src=movil[posicion].imagen2
    }
}

function cambiaprecio(posicion) {
    if(document.getElementById(`tamanop${posicion}`).checked){
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].pequeno + "€";
    }
    if(document.getElementById(`tamanom${posicion}`).checked){
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].mediano + "€";
    }
    if(document.getElementById(`tamanog${posicion}`).checked){
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].grande + "€";
    }
}

function anadircarrito(posicion){
    contador++;
    document.getElementById("numero").innerHTML=contador;
    alert("añadido " + movil[posicion].nombre);
    if(document.getElementById(`tamanop${posicion}`).checked){
        valor=movil[posicion].pequeno;
        tamanox="32GB"
    }
    if(document.getElementById(`tamanom${posicion}`).checked){
        valor=movil[posicion].pequeno;
        tamanox="64GB"
    }
    if(document.getElementById(`tamanog${posicion}`).checked){
        valor=movil[posicion].pequeno;
        tamanox="128GB"
    }
    lista.push({nombre:movil[posicion].nombre,precio:valor})
}

function listarCarrito() {
    document.getElementById('contenedorCarrito').innerHTML="";
    for(let x=0;x<lista.length;x++){
        document.getElementById('contenedorCarrito').innerHTML+=`<div class="cajaCarrito">
                                                                <div>${lista[x].nombre} </div>
                                                                <div>${lista[x].precio} </div>
                                                                 </div>` ;
    }
}

// function valortotal(posicion) {
//     document.getElementById('preciototal').innerHTML="";
//     if(document.getElementById(`tamanop${posicion}`).checked){
//         total=
//     }
// }
