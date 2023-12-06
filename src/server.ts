import express, {Request, Response} from "express"
import routes from "./routes"


const app = express();
const port = 8000;


app.use("/", routes)




app.listen(port, ()=>{
  console.log("Application is running ")
})



