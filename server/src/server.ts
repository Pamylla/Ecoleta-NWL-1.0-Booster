import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('qualquer coisa');

    response.json([
        'Hello World', 'Hello Again'
    ])
});

app.listen(3333);
