const os = require('os');
const freemem = os.freemem();
const totalmem = os.totalmem();

console.log(`Fremem is ${freemem}`);
console.log(`Totalmem is ${totalmem}`);

const usedmem = totalmem-freemem;
console.log(`Used is ${usedmem}`);