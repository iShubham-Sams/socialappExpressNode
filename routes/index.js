const express=require('express');
const routes=express.Router();

const login=require('../controller/login')

routes.get('/',login.login);
routes.use('/user',require('./userPath'))



module.exports= routes;