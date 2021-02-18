const express = require('express');
const bodyParser = require("body-parser");
const db = require('./model/mongoose')
const cors = require('cors')
const path = require('path')
const api = require('./routes/api')
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('', api)
const port = 3003
app.listen(port, () => console.log(`App listening on port ${port}!`))