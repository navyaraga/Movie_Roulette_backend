## Prerequisites
You need to have Node & Mysql installed in you local system. <br/>
To install [Node](https://nodejs.org/en/download/).<br/>
To install [MySql](https://www.youtube.com/watch?v=WuBcTJnIuzo)

## About
Creates the Tables in your MYSQL database and used those tables to save/fetch/update/add required data. 

## Initial Setup
Initialize your own mySql credentials in the following part of the **server.js**<br/>
```js
var connection = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : 'password',
});
```

#### `npm install`

Installs all the dependencies for the project.<br/>
If it throws an error. Run it again and that should work

#### `npm start`
Creates the required database connection, ems database, tables and Starts the server.<br/>
Inserts the data in *dummyData* folder to Admins & Employees Tables. <br/>

Run the server again with *npm install*
