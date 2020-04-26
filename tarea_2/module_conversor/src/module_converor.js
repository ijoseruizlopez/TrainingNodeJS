
//modules
const Axios = require('axios');

//constans
const accesKey = 'c7021857a11966766907ce4ad9a28e6b';
const base = 'data.fixer.io/api';

const axios = Axios.create({
  baseURL: `http://${base}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

async function request (url) {

  try{
    const response = await axios.get(`/latest?&access_key=${accesKey}`)
    if (response.data.success) {
      return response.data
    }
  }catch{
    console.log("error");
  }
}

async function rates() {
   var result = await request();
   return result.rates;
}

async function conversor(amount, symbol_from='USD', symbol_to='ARS') {
  try {
    var result = await request();
    var convertion = (result.rates[symbol_to] * amount)/result.rates[symbol_from];
    return convertion;
  } catch (error) {
    console.log("error");
  }
}

exports.conversor = conversor;