const section =document.querySelector('.container');
const data = new Date();
let diaSemana = data.getDay();


switch(diaSemana){
    case 0:
        diaSemana = 'Domoinigo';
    break;
    case 1:
        diaSemana = 'Segunda';
    break;
    case 2:
        diaSemana = 'Terça';
    break;
    case 3:
        diaSemana = 'Quarta';
    break;
    case 4:
        diaSemana = 'Quinta';
    break;
    case 5:
        diaSemana = 'Sexta';
    break;
    case 6:
        diaSemana = 'Sabado';
    break;
        
}
console.log(diaSemana);



        section.innerHTML += ` ${diaSemana} ${data}  `;
    