const express = require('express');
const PORT = 3000;

const app = express();

const start = async() => {
    try {
        app.listen(PORT, () => console.log('Server start has been listen'))
    } catch(err) {
        console.log(err);
    }
}

start();