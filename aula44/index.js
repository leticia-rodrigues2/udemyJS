// IIFE -> Immediately invoked function expression

(function (idade,peso,altura){
    const sobrenome ='Miranda';
    function criNome (nome){
        return nome + ' '+ sobrenome;
    }

    function falaNome(){
        console.log(criNome('Luiz'))
    }

    falaNome();
    console.log(idade,peso,altura);

})(30,80,1.80);