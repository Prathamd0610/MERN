const express = require('express');
const app= express();

app.get('/home',(req,res)=>{
    res.send('<h1>welcome get</h1>')
});

app.post('/home',(req,res)=>{
    res.send('<h1>welcome post</h1>')
});

app.patch('/home',(req,res)=>{
    res.send('<h1>welcome patch</h1>')
});

app.delete('/home',(req,res)=>{
    res.send('<h1>welcome delete</h1>')
});

app.listen(1500);
// download postman ..