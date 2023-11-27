import express from "express";
import path from "path";
import  {db} from "./config/connection";
import {router} from './routes'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(router);
db.once(`open`, () => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
