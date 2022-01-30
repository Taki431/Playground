
  const express = require('express');
  const bodyParser = require('body-parser');
  const mysql = require('mysql');

  const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Dlwlsxkr9!',
    database: 'playgrounddb'
  });

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/user', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM user', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/user so you can see the data.');
});

async function test(){
  await fetch('http://192.168.50.193:3000/user',{
  method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
  headers: '', // You can specify your requisition headers here. That line is optional.
  body: { // Here's the fun part. Put your data here.
    "name": this.state.name,
    "age": this.state.age,
    "phone_number": this.state.phone_number
  }
  })
    .then(response => response.json())
    .then(user => console.warn(user))
};

export {test};
