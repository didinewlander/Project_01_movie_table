const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = ()=>{
    mongoose.connect('https://data.mongodb-api.com/app/data-zsdnf/endpoint/data/v1')
    .then(()=> console.log('Connected to moviesDB'))
    .catch((error)=> console.log(error));
}

module.exports = connectDB;
