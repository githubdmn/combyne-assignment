const MYPORT = 8000;
const PORT = process.env.PROT || MYPORT;

const express = require('express');
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

app.get('/', (req, res) => {
    console.log('Index page\n');
    res.send('Index page');
});