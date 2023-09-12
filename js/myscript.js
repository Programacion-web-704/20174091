// Esto es un comentario

/* 
Esto es un comentario
de varias lineas
*/

/* CASO 1: Obtener cabecera del documento */

let cabecera = document.head;
console.log (cabecera)

/* CASO 2: Obtener el body */

let cuerpo = document.body;
console.log (cuerpo)

/* CASO 3: Recuperar un nodo y ver sus propiedades */

let lpAntiguos = document.getElementById("antiguo")
console.log(lpAntiguos)

let arr_antiguos = []
/* Lista de nodos hijos */
let nodos = lpAntiguos.childNodes
for (i=0; i<nodos.length; i++) {
    console.log (nodos [i])

    if( nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_antiguos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta1").innerHTML=arr_antiguos

/* CASO 3.1: Recuperar un nodo y ver sus propiedades*/
let lpModernos = document.getElementById("moderno")
console.log(lpModernos)

let arr_modernos = []
/* Lista de nodos hijos */
nodos = lpModernos.childNodes
for (i=0; i<nodos.length; i++) {
    console.log (nodos [i])

    if( nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_modernos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta2").innerHTML=arr_modernos

/* CASO 4: Concatenar arreglos*/
document.getElementById("rpta3").innerHTML=arr_antiguos.concat(arr_modernos)

/* CASO 5: Concatenar los elementos del arreglo para que sea un STRING */
document.getElementById("rpta3").innerHTML=arr_antiguos.join("*")

/* CASO 6: Ubicar la posicion de un elemento en un arreglo */
let pos = arr_modernos.indexOf("Kotlin")
document.getElementById("rpta3").innerHTML=pos

/* CASO 7: Insertar un elemento */
arr_modernos.splice(1, 0, "Unlanda", "Malboge")
document.getElementById("rpta3").innerHTML=arr_modernos

/* CASO 8: Insertar y borrar un elemento */
arr_modernos.splice(3, 1, "Intercal", "ooAk")
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 9: Obtener ultimo elemento del arreglo */
var elemento =  arr_modernos.pop()
document.getElementById("rpta4").innerHTML=elemento

/* CASO 10: Obtener primer elemento del arreglo */
var elemento =  arr_modernos.shift()
document.getElementById("rpta4").innerHTML=elemento

/* CASO 11: Colocar un elemento al final del arreglo */
arr_modernos.push("Dart")
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 12: Otra forma de colocar un elemento al final del arreglo */
arr_modernos[arr_modernos.length] = "Opa"
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 13: Colocar elemento al inicio del arreglo */
arr_modernos.unshift("SQL")
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 14: Ordenar el arreglo */
arr_modernos.sort()
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 15: Ordenar el arreglo al reves */
arr_modernos.sort()
arr_modernos.reverse()
document.getElementById("rpta4").innerHTML=arr_modernos

/* CASO 16: Generar HTML */
var rpta = []
rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brasil - 3 </li>")
rpta.push("<li> Chile - 1 </li>")
rpta.push("</ol>")

var contenido = rpta.join(" ")
document.getElementById("rpta4").innerHTML=contenido

