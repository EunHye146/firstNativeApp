const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set('port', 4000);

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

//post로 바꿔서 로그인 하기
app.post('/login', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    connection.query('select * from users where u_id=? and u_pw=? ', [id, pw] ,function(err,result) {
        if (err) throw err;
        if (result.length > 0) {
            console.log('사용자 찾음')
            res.send('사용자 찾음')
        } else {              
            console.log('사용자 찾지 못함')
            res.send('사용자 찾지 못함')
        }
    });
})

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});