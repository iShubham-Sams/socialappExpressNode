const express=require('express');
const routes=express.Router();

const userControllar=require('../controller/otherControlar');

routes.get('/singup',userControllar.signup);

module.exports=routes;