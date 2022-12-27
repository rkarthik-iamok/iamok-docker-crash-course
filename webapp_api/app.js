const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    let json_obj = [
        {
            id: "1",
            name: "takashi",
            rank: "jonin"
        },
        {
            id: "2",
            name: "Sarumaru",
            rank: "kage"
        },
        {
            id: "3",
            name: "kiame",
            rank: "chunin"
        }
    ]

    json_obj = JSON.stringify(json_obj, null, 2);

    // Set the Content Type header of the Server's response
    res.setHeader('Content-Type', 'application/json');
    
    res.send(json_obj);

});

app.listen(4000, '0.0.0.0', ()=> {
    console.log('SERVER is listening over port 4000...');
});