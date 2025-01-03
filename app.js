const express = require('express');
const app =  express();
app.use(express.json());

const articles = [
    {
        'id': 100,
        'name': 'John Doe',
        'email': 'jahid.hasan50001@gmail.com'
    },
    {
        'id': 101,
        'name': 'Jahid Hasan',
        'email': 'jahid.hasan50001@gmail.com'
    }
]

// article routes --> localhost:6000/articles

app.get('/articles', (req, res) => {
    res.json({
        data: articles
    })
})

app.post('/articles', (req, res) => {
    console.log(req.body);
})

app.get('/', (req, res) => {
    res.json({message: 'Hello World! This is a simple Node.js application.'});
})

app.listen(6000, () => {
    console.log('App is running on port 6000');
})
