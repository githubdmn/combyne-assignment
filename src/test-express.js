
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hi there Heroku!');
});

app.get('/api/items', (req, res) => {
    res.send(JSON.stringify([1, 2, 3]));
});

/*
app.post();
app.put();
app.delete();
*/

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});