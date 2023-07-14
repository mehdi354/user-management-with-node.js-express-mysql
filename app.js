const express = require('express');
const path = require('path');
const ejsLayout = require('express-ejs-layouts');

require('dotenv').config();

const app = express();

// Routes
 const userRoute = require('./routes/users')

//  DATABASE

const db = require('./config/database')

app.use(ejsLayout);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.set('layout' , './layout/layout');


app.use( express.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(userRoute);







// db.getConnection((err,connection) => {
//     if(err) throw err;
//     console.log("Connected")
// })

const Port = process.env.PORT || 8000;
app.listen(Port)