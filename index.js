const express = require('express') 
const app = express(); 

app.get('/',(req,res)=>{
res.send('hello')
}); 

app.get('/he',(req,res)=>{
res.send('new branch')
}); 

app.listen(3002,()=>{
console.log('server')
}); 
