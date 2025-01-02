const express = require('express');
const app =  express();

app.get('/', (req, res) => {
    res.json({message: 'Hello World! This is a simple Node.js application.'});
})

app.listen(6000, () => {
    console.log('App is running on port 6000');
})
