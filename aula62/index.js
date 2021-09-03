// new Object -> Objct.prototype

const objA ={
    chaveA :'A'
    // _proto_ : Object.prototype
};

const objB ={
    chaveB : objA
    //_proto_ : objA
}

const objC = new Object();
objC.chaveC = 'c';

Object.setPrototypeOf(objB,objA);
console.log(objC.chaveA);