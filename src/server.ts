import mongoose from 'mongoose';
import express, {Application} from "express"
import routes from "./routes"

const app: Application = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/", routes)

//@ts-ignore
mongoose.connect('mongodb+srv://nexusemran:123456780@firsttry.jezp7ok.mongodb.net/?retryWrites=true&w=majority')
  .then(()=>{
    app.listen(port, ()=>{
      console.log("Application is running ")
    })
  })
  .catch((err)=>{
    console.log(err);
    
  })





