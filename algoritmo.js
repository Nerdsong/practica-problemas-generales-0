const PRECIO_CERVEZA = 400;
const PRECIO_COCACOLA = 200;
const PRECIO_LEVITE = 180;

let elementosInventario = 1;
let w = "Esta variable sólo se usa en el bucle para el conteo del intenvario";
let elemento = "valor booleano";

let cantidadCerveza = "cantidades de cerveza";
let cantidadCocacola = "cantidades de cocacola";
let cantidadLevite = "cantidades de levite manzana";
let cantidadLevitePera = "cantidades de levite pera";

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

    cantidadCerveza = document.querySelector("#cantidades_1").value; 
    cantidadCocacola = document.querySelector("#cantidades_2").value;
    cantidadLevite = document.querySelector("#cantidades_3").value;
    cantidadLevitePera = document.querySelector("#cantidades_4").value;
}

//Este bucle genera los espacios en el carrito de compra según la cantidad de elementos
for (i=1 ; i < elementosInventario ; i ++){
    document.querySelector(`#carrito_de_compra_total`).innerHTML +=`
    <h3 id="carrito_de_compra_${i}"></h3>
    
    `;
}

function verCarritoDeCompra (){
    for (i=1 ; i < elementosInventario ; i ++){
        
        document.querySelector(`#carrito_de_compra_${i}`).innerHTML=``
    }
    for (i=1 ; i < elementosInventario ; i ++){
        let k = document.querySelector(`#cantidades_${i}`).value
            if (i==1 & k > 0 ){
                let total_cerveza = cantidadCerveza * PRECIO_CERVEZA 
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    <h3> ${cantidadCerveza} Cerveza Litro $${total_cerveza}</h3><br>
                `
            }
            else if (i==2 & k > 0){
                let total_cocacola = cantidadCocacola * PRECIO_COCACOLA
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    <h3> ${cantidadCocacola} Coca-cola $${total_cocacola}</h3><br>
                `
            }    
            else if (i==3 & k > 0){
                let total_levite = cantidadLevite * PRECIO_LEVITE
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    <h3> ${cantidadLevite} Levité Manzana Litro $${total_levite}</h3><br>
               ` 
            }
            else if (i==4 & k > 0){
                let total_levitePera = cantidadLevitePera * PRECIO_LEVITE
                document.querySelector(`#carrito_de_compra_${i}`).innerHTML +=`
                    <h3> ${cantidadLevitePera} Levité Pera Litro $${total_levitePera}</h3><br>
               `
            }    
            else{};
    }                    
}
function vaciarCarrito(){
    
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