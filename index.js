import express from 'express'
import connection from './database/db.js';
// import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import { dirname } from "path";
import router from './routes/route.js';
import cors from 'cors';
import path from "path";
import bodyParser from 'body-parser';
const app=express();

app.use(bodyParser.json ({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));

const port=8000;


app.use(cors());
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
app.get("/", (req, res) => { app.use(express.static(path.resolve(__dirname, "client", "build"))); res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); });

app.use('/', router);
connection();
app.listen(port, ()=>{
    console.log(`the server is running a port ${port}`);
})
