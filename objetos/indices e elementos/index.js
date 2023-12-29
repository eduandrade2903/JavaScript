
// function tenis (tamanho,estoque, preco) {
//     return {
//         tamanho : tamanho,
//         estoque : estoque,
//         preco : preco 

//     }
// }

// console.log(tenis(35, true, 125.00));

//métodos 

// const tenis = {
//     getTamanho(){
//         return 35;
//     }
// }

// console.log(tenis.getTamanho());

let tenis = {
    id : 1,
    nome: 'Lebron',
    marca : 'Nike',

}

function getTenisByID() {
    return tenis.id;
}

function GetTenisName () {
    return tenis.nome;
}

function getTenisMarca() {
    return tenis.marca;
}

console.log(getTenisByID());
console.log(GetTenisName());
console.log(getTenisMarca());