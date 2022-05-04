const express=require('express');
const routes=express.Router();

const loginSignup=require('../controller/loginSignup')

routes.get('/',loginSignup.loginSingup);
routes.get('/singup',loginSignup.signup)


module.exports= routes;