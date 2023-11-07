let mongoose = require('mongoose');
let express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors')

const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

mongoose
.connect("mongodb+srv://jsanch871:Wefewlinloovfs@cluster0.qbqvklc.mongodb.net/BLOG")
.then((x)=>{
    console.log(
        `Connected to Mongo! Database name:"${x.connections[0].name}"`,
    )
})
.catch((err)=>{
    console.error("Error connecting to Mongo", err.reason);
});

const app = express();
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);
app.use(cors());
app.use("/USER", userRoute);
app.use("/POST", postRoute);

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.use((req,res,next)=>{
    // next(createError(404));
});

app.use(function (err,req,res,next){
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log("Connected to port" + port)
})