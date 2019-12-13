'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

require('./utils/pass.js');
require('./routes/authRoute.js');

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('uploads'));

app.use('/cat', catRoute);

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
