const express=require('express');
const path = require('path')
const port=8000;

const app=express();
const db=require('./config/mongoose')
const cookieParser=require('cookie-parser');


app.use(express.static('./assets'));


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(cookieParser);

app.use('/',require('./routes'))
app.listen(port,function(err){
    if(err){
        console.log('error acured in listion port:',port);
    }
    console.log('success in port :',port)
})