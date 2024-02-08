import express, { Express, Request, Response } from "express";
import path from "path";
import { db } from "./config/connection";
import router from './routes';
import cors from 'cors';

const app: Express = express();
const PORT: number | string = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define CORS options
const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: ['https://maximotor.vercel.app', 'http://localhost:5173']
};

// Enable CORS middleware with options
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
}

app.use(router);

db.once(`open`, () => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
