var express = require('express');
var app = express();
var mysql = require('mysql');
const port = 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b2b24044b19233',
    password: 'e5a93eaf',
    database:heroku_76ca6dc5b7a8f54
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected...");
})

var createddb_query = "CREATE DATABASE if not exists Movie_Roulette";
connection.query(createddb_query, (err, result) => {
    if (err) console.log('error', err);
    console.log("DB connected...");
})

var usedb_query = "USE Movie_Roulette";
connection.query(usedb_query, (err, result) => {
    if (err) console.log('error', err);
    console.log('Using DB...');
})

app.post('/selectmovie', (req, res) => {

    let sql = 'SELECT movie_title,imdb_score,genres FROM moviestable WHERE imdb_score >? and LOCATE(?,genres,1) ORDER BY RAND() LIMIT 1;';
    connection.query(sql, [req.body.imdb_score, req.body.genres], (err, result, fields) => {
        if (err){
            console.log('error in post select movie', err);
        }
        console.log(result);
        res.send(result[0]);
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening to port ${PORT}`)
});
