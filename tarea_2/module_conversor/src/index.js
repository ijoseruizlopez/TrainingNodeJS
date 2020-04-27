'use strict';
const module_converter = require('./module_converter');

function Init(){
  call_rates();
  call_convert();
}
Init();

async function call_rates() {
  try {
    var rates  =  await  module_converter.converter.get_rates();
    console.table(rates);
  } catch (error) {
    console.table(error)
  }
}

async function call_convert() {
  try {
    var amount  =  await  module_converter.converter.convert_amount(80, 'ARS', 'USD');
    console.table(amount);
  } catch (error) {
    console.table(error)
  }
}


