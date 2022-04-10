require('dotenv').config();
const express = require('express');
const knex = require('./knex/knex.js');
const cookieParser = require('cookie-parser');
const router = require('./routers');
const errorMiddleware = require('./middlewares/errorMiddleware');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);

const start = async() => {
  try {
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch(err) {
    console.log(err);
  }
}

start();