const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const{mongoose} = require('./database');

const app = express();

//Puerto
app.set('port', process.env.Port || 3000);

//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

//Routes
app.use('/api/cars', require('./routes/car.routes'));
//servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto: ' + app.get('port'));
});


