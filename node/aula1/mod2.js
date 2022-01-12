const nomeDestruction = 'Leticia - usando - destruction';
const sobrenomeD = 'Rodrigues';

const falaNomeDestruction = () => nomeDestruction + ' ' + sobrenomeD;

exports.nomeDestruction =nomeDestruction ;
exports.sobrenomeD = sobrenomeD;
exports.falaNomeDestruction=falaNomeDestruction;

console.log(exports)

const {Pessoa} =require('./mod3');
const p1 = new Pessoa ('Leticia')
console.log(p1)