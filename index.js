import cors from "cors"
import bodyParser from "body-parser";
import express from "express";
import UsersRouter from "./Routers/UserRouter.js"
import LinkRouter from "./Routers/LinkRouter.js";
import RedirectRouter from "./Routers/RedirectRouter.js";
import connectDB from "./database.js";

//mongodb+srv://esty7386:<password>@cluster0.awxvop9.mongodb.net/

connectDB();
const app = express()
app.use(cors());
app.use(bodyParser.json());
const port = 3000

app.use('/links',LinkRouter);
app.use('/users',UsersRouter);
app.use('/',RedirectRouter);
  
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
