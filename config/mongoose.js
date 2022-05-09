const mongoose  = require("mongoose");
mongoose.connect('mongodb://localhost/facbook_database');
const db=mongoose.connection;

db.on('error',console.error.bind('error in connecting db'));
db.once('open',function(){
    console.log('conected to database::mongo db')
});

module.exports=db;
