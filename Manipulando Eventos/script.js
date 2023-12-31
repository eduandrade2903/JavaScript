'use strict';


// const acionarAlert = (value) => {
//     value = "O popUp foi acionado";
//     alert(value)
// }

/*Manipulador de evento nível 1 */

const btn = document.querySelector("button");

// btn.onclick = function alertOne() {
//     alert("Aqui foi acionado")
// }

// btn.onclick = function alertTwo() {
//     alert("Aqui foi acionado2")
// }

// Se tivermos mais de uma função com a mesma propriedade, o javaScript irá substituir pela ultima que foi declarada

/*Manipulador de evento nível 2 */

btn.addEventListener('click', (event) => {
   document.querySelector('body').style.background = 'darkgreen'
})
// ' btn.addEventListener('mouseover', (event) => {
//      console.log(event.clientX, event.clientY)
// })'