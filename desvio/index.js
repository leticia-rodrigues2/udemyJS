var media = 0;
var lista = [2, 7, 5, 3, 4, 7 , 8];
for (var i = 0;i < lista.length; i++) {
    media += lista[i];
}
media = media/lista.length;
var varianca = 0;
for (var i = 0;i < lista.length; i++) {
    varianca += (media - lista[i]) * (media - lista[i]);
}
varianca = varianca/lista.length;
Math.sqrt(varianca);


console.log(Math.sqrt(varianca));