const form =document.querySelector('.form');
    const resultado =document.querySelector('.resultado');

    const pessoas =[];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso= form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            peso: peso.value,
            altura : altura.value
        });
        let v =10.5;
        if(v==10)

        console.log(pessoas);
        let imc = (peso.value / (altura.value*altura.value));
        imc = imc.toFixed(2);
        console.log(imc);
    
        if ( imc <= 16.99 ){
            resultado.innerHTML += `<p> Seu IMC É ${imc} <strong>Muito abaixo do peso</strong>  `
        }else if(imc >=17  && imc <=18.44) {
            resultado.innerHTML += `<p> Seu IMC É ${imc } <strong>Abaixo do peso</strong>  `
        }else if (imc >=18.5 && imc <=24.99){
            resultado.innerHTML += `<p> Seu IMC É ${imc} <strong> Peso normal</strong> `
        }else if (imc >=25 && imc <=29.99){
            resultado.innerHTML += `<p> Seu IMC É ${imc} <strong> Acima do peso</strong> `
        }
        else if (imc >=30 && imc <=34,99){
        resultado.innerHTML += `<p> Seu IMC É ${imc} <strong>Obsidade grau 1</strong> `
        }
        else if (imc >=35 && imc <=40){
        resultado.innerHTML += `<p> Seu IMC É ${imc} <strong> Obsidade grau 2</strong> `
    }
        else if (imc > 40){
        resultado.innerHTML += `<p> Seu IMC É ${imc} <strong>Obsidade grau 3</strong> `
        }
        
    }
    form.addEventListener('submit', recebeEventoForm);
meuEscorpo();