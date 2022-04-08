require('dotenv').config();
const express = require('express');
const router = require('./routers');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', router);

const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch(err) {
        console.log(err);
    }
}

start();