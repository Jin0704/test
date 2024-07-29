const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    // for 100 loops
    for (let i = 0; i < 100; i++) {
        console.log('Hello World')
        // if (i === 50)  break
        if(i === 50) {
            res.send('Hello World!')
            return
        }
    }
    // while loop
    let tEst = 4
    while(tEst<5) {
        tEst--
        consoe.log('tEst:', tEst)
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
