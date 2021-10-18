const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');



app.listen(5500, () => console.log('Server started: 5500'))