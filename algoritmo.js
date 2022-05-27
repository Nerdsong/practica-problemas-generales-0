const PRECIO_CERVEZA = 400;
const PRECIO_COCACOLA = 200;
const PRECIO_LEVITE = 180;

let elementosInventario = 1;
let w = "Esta variable sólo se usa en el bucle para el conteo del intenvario";
let elemento = "valor booleano";

let cantidadCerveza = 0 //"cantidades de cerveza";
let cantidadCocacola = 0//"cantidades de cocacola";
let cantidadLevite = 0//"cantidades de levite manzana";
let cantidadLevitePera = 0//"cantidades de levite pera";
let cantidadTotalProductos = 0//"total de la cantidad de productos";

let total_cerveza = 0
let total_cocacola = 0
let total_levite = 0
let total_levitePera = 0
let total_general = 0

//--Este bucle automatiza el conteo de elementos en el inventario
do {
    elemento = !!document.getElementById(`cantidades_${elementosInventario}`);
    elementosInventario ++;
    console.log(elemento) }
    while( elemento == true);

    elementosInventario = elementosInventario - 1

//Este bucle genera las listas para seleccionar la candidad de productos
for (i=1 ; i < elementosInventario ; i ++){
    for (k=0 ; k < 11 ; k ++){
    document.querySelector(`#cantidades_${i}`).innerHTML +=`
        <option value = "${k}"> ${k} </option>
       `
    }
}

function asignarCantidades(){

    cantidadCerveza = Number(document.querySelector("#cantidades_1").value); 
    cantidadCocacola = Number(document.querySelector("#cantidades_2").value);
    cantidadLevite = Number(document.querySelector("#cantidades_3").value);
    cantidadLevitePera = Number(document.querySelector("#cantidades_4").value);
}

//Este bucle genera los espacios en el carrito de compra según la cantidad de elementos
for (i=1 ; i < elementosInventario ; i ++){
    document.querySelector(`#carrito_de_compra_total`).innerHTML +=`
    <h6 id="carrito_de_compra_${i}"></h6>
    
    `;
}

function verCarritoDeCompra (){
    total_cerveza = 0;
    total_cocacola = 0;
    total_levite = 0;
    total_levitePera = 0;
    document.querySelector(`#total_a_pagar`).innerHTML = ``;

    for (i=1 ; i < elementosInventario ; i ++){
        
        document.querySelector(`#carrito_de_compra_${i}`).innerHTML=``;
    }
    for (i=1 ; i < elementosInventario ; i ++){
        let k = document.querySelector(`#cantidades_${i}`).value;
            if (i==1 & k > 0 ){
                total_cerveza = cantidadCerveza * PRECIO_CERVEZA 
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    ${cantidadCerveza} Cerveza Litro $${total_cerveza}
                `
            }
            else if (i==2 & k > 0){
                total_cocacola = cantidadCocacola * PRECIO_COCACOLA
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    ${cantidadCocacola} Coca-cola $${total_cocacola}
                `
            }    
            else if (i==3 & k > 0){
                total_levite = cantidadLevite * PRECIO_LEVITE
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    ${cantidadLevite} Levité Manzana Litro $${total_levite}
               ` 
            }
            else if (i==4 & k > 0){
                total_levitePera = cantidadLevitePera * PRECIO_LEVITE
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    ${cantidadLevitePera} Levité Pera Litro $${total_levitePera}
               `
            }    
            else {};
    }
    total_general = 0 + (total_cerveza + total_cocacola + total_levite + total_levitePera)
                document.querySelector(`#total_a_pagar`).innerHTML =`
                    <h4> Total= $${total_general}</h4><br>`;                    
}
function vaciarCarrito(){
    total_cerveza = 0;
    total_cocacola = 0
    total_levite = 0
    total_levitePera = 0
    document.querySelector(`#total_a_pagar`).innerHTML = ``;

    for (i=1 ; i < elementosInventario ; i ++){
        
        document.querySelector(`#cantidades_${i}`).innerHTML =``
        
    }
    for (i=1 ; i < elementosInventario ; i ++){
        for (k=0 ; k < 11 ; k ++){
        document.querySelector(`#cantidades_${i}`).innerHTML +=`
            <option value = "${k}"> ${k} </option>
           `
        }
    }
    for (i=1 ; i < elementosInventario ; i ++){
        document.querySelector(`#carrito_de_compra_${i}`).innerHTML=``
    }    
}

function pagoTarjeta(){
    cantidadTotalProductos = (cantidadCerveza + cantidadCocacola + cantidadLevite + cantidadLevitePera);
    console.log(cantidadTotalProductos)
    
    if(cantidadTotalProductos < 3){
    
    document.querySelector("#facturacion").innerHTML=`
        
        <label>Cantidad de cuotas
            <select>
                <option>1 cuota </option>
            </select>
        </label>

    `}
    else if(cantidadTotalProductos < 7 ){
        document.querySelector("#facturacion").innerHTML=`
        
        <label>Cantidad de cuotas
            <select>
                <option>1 cuota </option>
                <option>3 cuota </option>
            </select>
        </label>`
    }
    else if(cantidadTotalProductos >= 7 ){
        document.querySelector("#facturacion").innerHTML=`
        
        <label>Cantidad de cuotas
            <select>
                <option>1 cuota </option>
                <option>3 cuota </option>
                <option>6 cuota </option>
            </select>
        </label>`
    }

    function cuotas(){

    }
}