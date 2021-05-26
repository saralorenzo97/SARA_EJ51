var compra=1

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
    }
];

pintar();
function pintar(){
    for(let x=0; x<movil.length; x++){
        document.getElementById("contenedor").innerHTML+=` 
    <div class="caja">
        <div id="rojo${x}" class="rojo">${movil[x].pequeno}</div>
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
                <button onclick="comprar() id="comprar">Comprar</button>
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
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].pequeno
    }
    if(document.getElementById(`tamanom${posicion}`).checked){
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].mediano
    }
    if(document.getElementById(`tamanog${posicion}`).checked){
        document.getElementById(`rojo${posicion}`).innerHTML=movil[posicion].grande
    }
}

function comprar(posicion) {
    for(x=0; x<compra; x++){
        document.getElementById("numero").innerHTM=compra
    }
}
