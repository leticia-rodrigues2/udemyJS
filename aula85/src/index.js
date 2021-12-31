import{ nome as nome2 , sobrenome, idade2 , soma} from './modulo1';
import{ nome3 , sobrenome3, idade3 , soma3 , Pessoa3} from './modulo1';
// import * as Meumodulo1 from './modulo1';  IMPORTAR TUDO 
import FunSubtrair from './modulo1';
console.log('FORMA4',FunSubtrair(30,5))
const nome = 'Theo'
console.log ('FORMA1',nome ,nome2 ,sobrenome, idade2 );
console.log(soma (20,30));

console.log ('FORMA2' ,nome3 ,sobrenome3, idade3 );
console.log(soma3 (3,30));

const p1 = new Pessoa3 ('Leticia','RodriguesClass')
console.log(p1);