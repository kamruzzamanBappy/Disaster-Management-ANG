const express = require('express');
const cors = require('cors');
const connection = require('./connection');

const usrRoute = require('./routes/user');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',usrRoute);

module.exports = app;