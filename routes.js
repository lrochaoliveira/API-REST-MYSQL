const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host: 'localhost', 
    user: 'app',     
    password: 'root', 
    database: 'appDB'   
});


const app = express();

app.get('/fornecedores', function (req, res) {
     connection.getConnection(function (err, connection) {
        if(err) {
            console.log(err)
            return
          }

          connection.query('select * from fornecedores', function (error, results, fields) {
          res.send(results)
        });
    });
});

app.listen(3000, () => {
    console.log('Vai no navegador e entra em http://localhost:3000/fornecedores pra ver os usuários cadastrados.');
});
