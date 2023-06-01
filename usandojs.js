const pessoa ={
    nome: 'jussier da costa almeida',
    idade: 35,
    endereco:{
        logradouro:'rua otavio augusto barbosa',
        nunmero:492
    }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome , bemHomurado = true}= pessoa
console.log(sobrenome, bemHomurado)








function soBoasNoticias(nota){
    if (nota >=7){
        console.log('aprovado ... '  + nota)
    }
    else{
        console.log('Reprovado ... '  + nota)
    }
}
soBoasNoticias(6)
soBoasNoticias(9)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('é verdade... ' + valor)
    }
}

  
    seForVerdadeEuFalo(1)
    seForVerdadeEuFalo('  ')
    seForVerdadeEuFalo()
    seForVerdadeEuFalo([])
    seForVerdadeEuFalo('!')
    seForVerdadeEuFalo([1, 3])
    seForVerdadeEuFalo({})

    function resultado(a, b, c, d, e, f) {
        /*const soma = a + b
        const subtracao = soma - c  
        const multiplicacaodivisao =  subtracao * d/ e 
        const potencia = multiplicacaodivisao **f*/
        return (((a+b)-c)*d/e)**f
    }
        console.log(resultado(10, 5, 3, 5, 2, 2))
        