"use strict";

/* Encontrando os elementos no DOM */

//Pai (parentElement e parentNode)

// const strong = document.querySelector("strong");

// console.log(strong.parentElement);
// console.log(strong.parentNode);

/*-----------------------------*/


//Filhos (children, chlidNodes)


// const container = document.querySelector(".container");

// console.log(container.children); // retorna um HTMLCollection junto dos filhos não itera no foreach
// console.log(container.childNodes); // retorna um NodeList itera os elementos de uma forma diferente "burlando o sistema"

// const children = Array.from(container.children); // esta linha de comando transforma o HTMLCollection em um array

// console.log(children);

// children.forEach((res) => {
//     console.log(res)
// })

/*FirstChild, FirstElementChild */

// console.log(container.firstElementChild);

// LastChild, FirstElementChild

// console.log(container.lastChild);
// console.log(container.lastElementChild);

/*Irmaõs, NextSibling,NextElementSibling*/ 

// const h1 = document.querySelector("h1");

// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);

/*PreviusSibling, PreviusElementSibling */

// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);

/*append e appendChild acrescenta elemtentos ou textos dentro de alguma classe ou elemento/id*/

 const container = document.querySelector(".container");

// container.append("<p>Olá eduardo </p>"); //não diferencia texto de elemento html

// const newDiv = document.createElement("div");
// newDiv.innerText = "Olá mundo!"
// container.appendChild(newDiv);//nao adiciona textos

/*insertBefore */

const newH2 = document.createElement("h2");
const paragrafo = container.querySelector(".paragrafo");


newH2.innerText = "novo H2";

container.insertBefore(newH2, paragrafo)