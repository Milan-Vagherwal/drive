const express = require("express")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const dotenv = require('dotenv');
dotenv.config();

const connectToDB = require('./config/db');
connectToDB();

const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');


app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, ()=>{
    console.log("server is running on port http://localhost:3000/")
})