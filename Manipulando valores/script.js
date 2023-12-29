 "use strict";

/*
TextContent: Retorna o text Com formatações, mas sem os elementos do html
innerText: Retona somente o texto, sem formatações ou elementos do html
*/

// const p = document.querySelector("p");

// p.textContent = "Eduardo de Andrade";
// p.innerText = "Eduardo de Andrade"
// console.log(p)

// p.textContent = "Eduardo de Andrade";
/***********************************************************************/


/* innerHtml :  retorna textos com formatações e elementos html 
createElement cria um elemento html*/

//const div = document.querySelector("div");

// console.log(1, div);

// div.innerHTML = `${div.innerHTML} <strong> Esse texto está alterado</strong>`;

// console.log(2, div)

/*const elementUl = document.createElement("ul");
console.log(elementUl);

[1,2,3].forEach((element => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
}))

const createDiv = document.createElement("div");
console.log(createDiv);
div.appendChild(elementUl);


createDiv.innerText = "Aqui tem um div nova"
div.appendChild(createDiv);
*/
 /* Valores de input */

//  const input = document.querySelector("#name");

//  console.log(input.value);

//  setTimeout( () => {

//     input.value = "alterado"
//     console.log(input.value);
//  },1000)

// const div = document.querySelector("div");
//  div.setAttribute("id", "teste");
//  div.setAttribute("class", "active");

//  div.setAttribute("class", `${div.getAttribute("class")} background-red`);

// div.removeAttribute("class", "active")
// console.log(div);


/*documentFragment -- um fragmento de fora do DOM, um dado secundário fora do DOM principal*/

// const ul = document.querySelector("ul");

// const fragment = document.createDocumentFragment();

// const lanches = ['lanche 1','lanche 2','lanche 3','lanche 4',];

// lanches.forEach((element) => {
//     const li = document.createElement("li");
//     li.textContent = element;
//     fragment.append(li);
// })

// ul.append(fragment);


