const express = require('express');
const app = express();
var expressWs = require('express-ws')(app);
const mathController = require('./controller/mathController');

var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index');
});

mathController(app);

const server = app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
});