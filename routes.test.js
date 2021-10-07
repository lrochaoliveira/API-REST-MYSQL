const axios = require('axios');

test('Teste do GET', () => {
   axios({
       method:'GET',
       url: 'http://192.168.0.128:3000/fornecedores',
       responseType: 'stream'
   })
   .then(response => response.json())
    .then(fornecedores => console.warn(fornecedores))
  });