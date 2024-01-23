import express, { Request, Response } from "express";
import path from "path";
import  {db} from "./config/connection";
import router from'./routes'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: ['https://maximotor.vercel.app', 'http://localhost:5173']
}))
app.use(router);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
}
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
})
db.once(`open`, () => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
