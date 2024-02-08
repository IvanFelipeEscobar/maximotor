import express, { Express, Request, Response } from "express";
import path from "path";
import { db } from "./config/connection";
import router from './routes';
import cors from 'cors';

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
//define environment enum
enum Env {
  Development = 'development',
  Production = 'production'
}
//variable to handle environment awareness
const env = process.env.NODE_ENV === Env.Production ? Env.Production : Env.Development
//middleware for parsing json
app.use(express.json());
//middleware for parsing url encoded data
app.use(express.urlencoded({ extended: true }));

// Define CORS options
const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: env === Env.Development ? ['http://localhost:5173'] : ['https://maximotor.vercel.app']
};

// Enable CORS middleware with options
app.use(cors(corsOptions));
//serve static files only in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
}
//routes are defined in separate folder to keep concerns separated
app.use(router);
//database connection
db.once(`open`, () => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
