import express, {Request, Response} from "express"


const app = express();
const port = 8000;


app.get("/", (req: Request, res: Response) => {
  res.send("Home page content")
} )




app.listen(port, ()=>{
  console.log("Application is running ")
})



