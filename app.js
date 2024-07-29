const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    // for 100 loops
    for (let i = 0; i < 100; i++) {
        console.log('Hello World')
    }
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
