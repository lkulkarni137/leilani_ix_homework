const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/posts', (req, res) => {
    res.send({
        name: 'Leilani',
        lastName: 'Kulkarni',
        age: 19,
        title: 'iX Software Engineering Student',

    });
});

app.listen(port, () => {
    console.log('Listening on port 3001')
});