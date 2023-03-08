const mongoose =  require("mongoose");
    
    // mongodb.net/AnkitaAPI?retryWrites=true&w=majority";


const connectDB =(uri) =>{ 
    
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
}; 
module.exports =connectDB;