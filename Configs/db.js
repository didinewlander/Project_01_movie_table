const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(()=> console.log('Connected to moviesDB'))
    .catch((error)=> console.log(error));
}

module.exports = connectDB;