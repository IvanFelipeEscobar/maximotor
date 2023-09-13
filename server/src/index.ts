import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import path from 'path';

const db = require('./config/connection')
const routes = require(`./routes`)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.use(routes)
  db.once(`open`, () => {
    app.listen(PORT, ()=>console.log(`Back end server running on port: ${PORT}`))
  })