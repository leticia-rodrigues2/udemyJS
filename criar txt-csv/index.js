const fs = require('fs');
let texto = 'euuuuuuuuuuu';
let titulo ='estooooouuuu';
function salvar() {

    fs.writeFileSync("./criar txt/salvando2.txt", texto +" "+  titulo ,"utf-8" );
    fs.writeFileSync("./criar txt/salvandoCsv.csv", texto +" "+  titulo ,"utf-8" );
   
}
salvar();
