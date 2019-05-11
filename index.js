const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 7880;

app.use(morgan('dev'));
app.use(json());
app.use(cors());

const health = require('./controllers/Health');

app.use('/v1/', health);

http.listen(PORT, () => console.log(`App running in port ${PORT}`));
