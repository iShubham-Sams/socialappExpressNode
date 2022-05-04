module.exports.loginSingup=function(req,res){
    return res.render('loginSingup',{
        title:"this is log-in  page"
    })
}


module.exports.signup=function(req,res){
    return res.render('signup',{
        title:"this is sign-up  page"
    })
}

