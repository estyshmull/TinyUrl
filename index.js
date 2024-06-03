import express from 'express' 
import cors from "cors"
import bodyParser from "body-parser";

import UsersRouter from "./Routers/UserRouter.js"
//mongodb+srv://esty7386:<password>@cluster0.awxvop9.mongodb.net/
const app = express()
app.use(cors());
app.use(bodyParser.json());
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/tasks",UsersRouter);
//   app.get("/tasks/:id",(req,res)=>{
//     res.send("get task by id");
//   })
  
//   app.post("/tasks/",(req,res)=>{
//     res.send("add a new task");
//   })
  
//   app.put("/tasks/:id",(req,res)=>{
//     res.send("update a task");
//   })
  
//   app.delete("/tasks/:id",(req,res)=>{
//     res.send("delete a task");
//   })
  
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
