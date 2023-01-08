const express = require('express');
const cors = require('cors');
const connectDB = require('./Configs/db');
const movieRouter = require('./Routers/movieRouter');

const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/movies', movieRouter);
app.get('/', function (req, res) {
    res.sendFile("movies.html", { root: "./App" })
});
 
app.listen(port, () => {
    console.log('listening on port http://localhost:' + port);
});