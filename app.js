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

app.get('/articles/:id', (req, res) => {
    const id = req.params.id;
    let data;
    for(let i = 0; i < articles.length; i++){
        if(articles[i].id == id){
            data = articles[i];
            break;   
        }
    }
    res.json({
        data
    })
})

app.post('/articles', (req, res) => {
    // console.log(req.body);
    articles.push(req.body);
    res.json({
        message: "Article created successfully",
    })
    
})
// app.patch('/articles/:id', (req, res) => {
//     // console.log(req.body);
//     // articles.push(req.body);
//     // res.json({
//     //     message: "Article created successfully",
//     // })
//     // const id = req.params.id;
//     for(let i = 0; i < articles.length; i++){
//         if(articles[i].id == req.params.id){
//             articles[i].name = req.body.name;
//             articles[i].email = req.body.email;
//             res.json({
//                 message: "Article updated successfully",
//             })
//         }
//         else{
//             res.json({
//                 message: "Article not found",
//             })
//         }
//     }

    
// })
app.delete('/articles/:id', (req, res) => {
    // console.log(req.body);
    const id = req.params.id;
    let data = [];
    for(let i = 0; i < articles.length; i++){
        if(articles[i].id != id){
            data.push(articles[i]);
        }
    }
    res.json({
        data,
        message: "Article deleted successfully",
    })
})

app.get('/', (req, res) => {
    res.json({message: 'Hello World! This is a simple Node.js application.'});
})

app.listen(6000, () => {
    console.log('App is running on port 6000');
})
