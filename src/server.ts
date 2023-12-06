import express, {Application} from "express"
import routes from "./routes"

const app: Application = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/", routes)

app.listen(port, ()=>{
  console.log("Application is running ")
})



