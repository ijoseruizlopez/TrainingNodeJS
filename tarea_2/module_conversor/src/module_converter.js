
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
  try {
    const response = await axios.get(`/latest?&access_key=${accesKey}`)
    if (response.data.success) {
      return response.data
    }
    throw response.data.error;
  } catch (error) {
    throw error;
  }
}

async function get_rates() {
  try {
    var result = await request();
    return result.rates;
  } catch (error) {
    throw error;
  }
}

async function convert_amount(amount, symbol_from='USD', symbol_to='ARS') {
  try {
    var result = await request();

    if(!result.rates[symbol_from])
      throw symbol_from + " nonexistent symbol";

    if(!result.rates[symbol_from])
      throw symbol_to + " nonexistent symbol";

    var convertion = (result.rates[symbol_to] * amount)/result.rates[symbol_from];
    return convertion;
  } catch (error) {
    throw error;
  }
}

exports.converter = {get_rates, convert_amount} ;