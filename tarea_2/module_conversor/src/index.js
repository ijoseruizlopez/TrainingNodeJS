'use strict';
const aa = require('./module_converor');


async function rates() {
  var algo  =  await  aa.conversor(100, 'ARS', 'PEN');
  console.table(algo);
}

rates();
