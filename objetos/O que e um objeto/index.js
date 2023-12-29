// sintaxe de um objeto, let nomeDoObjeto = {} entre chaves, seus atributos recebem nomeDoAtributo, e são 
//atribuídos por ":" 

let tenis = { 
    tipo : 'tenis de corrida',
    cadarco : 'G',
    estoque : false,
    tamanho : {
        palmilha : 39, 
        tenis : 40,
        caixa : { 
            altura : 35,
            largura : 40,
            profundidade : 10

        },
    },
    // marca: ["Nike","Adidas", "etc"] Array de valores ou
    // array de objetos.
    marca : [
        {
            nome : "nike"
        },
        {
            nome : "adidas"
        },
        {
            nome : "etc"
        }
    ],
    getMarca : function (param ) {
        return this.marca[param].nome;
    }

}