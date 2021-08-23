// USANDO IF ELSE 
//aula 18
/*
Os valores considerados falsos no javascript são:
undefined.
null.
0 (Zero)
” (String vazia)
NaN (Not a Number)

*/

const hora = 13 ;
if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >=12 && hora <=17){
    console.log('Boa tarde');
}else if (hora >= 18 && hora<= 23){
    console.log('Boa tarde');
} else {
    console.log('HORA INVALIDA')
}

const tenhoGrana = '' ;

if(tenhoGrana){
    console.log('Vou sair de casa');
}else {
    console.log('Não vou sair de casa')
}