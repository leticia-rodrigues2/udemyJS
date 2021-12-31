const nome = 'Leticia';
const sobrenome = 'Rodrigues';
const idade = 24;

function soma (x,y){
  return x+y;
}

export { nome , sobrenome, idade as idade2, soma }

// FORMA DE EXPORTAR 3
export const nome3 = 'Leticia';
export const sobrenome3 = 'Rodrigues';
export const idade3 = 24;
const cpf = '5645656456456' // não é enviado
export function soma3 (x,y){
  return x+y;
}

export class Pessoa3 {
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome;
  }
}
// FORMA 4 
export default function subtrair (x,y){
  return x-y;
}
