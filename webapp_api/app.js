const express = require('express');

const app = express();

// Express Routes
app.get('/', (req, res)=> {
    let json_obj = [
        {
            id: "1",
            name: "Yoshi",
            rank: "Chunin"
        },
        {
            id: "2",
            name: "Toshi",
            rank: "Genin"
        },
        {
            id: "3",
            name: "SoShi",
            rank: "Kage"
        },
    ]

    // Set the Content-Type header
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json_obj, null, 2));

});

app.listen(4000, '0.0.0.0', ()=> {
    console.log('Server is listening over PORT 4000...');
});