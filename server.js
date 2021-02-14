const express = require("express");
const app = express();
const port = 8000;

app.use('/static', express.static("static")); // Set STATIC route

app.set('views', `${__dirname}/views`); // Set TEMPLATE folder with EJS
app.set('view engine', 'ejs'); // SET EJS views engine

//para hacer post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Para utilizar archivo RUTAS externo
app.use(require('./routes/router'));


//    aqui van las configuraciones (los get, use, post)

app.listen(port, () => console.log(`Listening on port: ${port}`)); // arranca el servidor