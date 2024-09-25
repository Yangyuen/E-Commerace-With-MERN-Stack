//NzRhrGbeN89Ff1WF **MongoDB
const express = require('express')
const db = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');



//create DB
//creata Separate file


db.connect(
    "mongodb+srv://thekay1112:NzRhrGbeN89Ff1WF@cluster0.jgtd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>console.log('MongoDB connected'))
    .catch((error)=>console.log(error));
    

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : "http://localhost:5173/",
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders :[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter)

app.listen(PORT, ()=>console.log(`Service is running on port ${PORT}`));




