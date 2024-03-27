const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8080;

const connection = mysql.createConnection({
  host: '194.233.85.141',
  user: 'u0ld3n6z_express',
  password: '%t+ZPQ;dum3F',
  database: 'u0ld3n6z_express',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM user', (error, results) => {
    if (error) throw error;

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
