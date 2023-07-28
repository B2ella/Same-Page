//import express server package
import express from "express"

//import morgan package
import morgan from "morgan";

// import cors package
import cors from "cors";


//load router modules from their path
import questionRouter from './routes/themiddleroutes.js'
import bfequestionRouter from "./routes/beforetheendroutes.js";
import childrenquestionRouter from "./routes/childrenroutes.js";
import familyquestionRouter from "./routes/familyroutes.js"
import financesquestionRouter from "./routes/financesroutes.js"
import healthquestionRouter from "./routes/healthroutes.js"
import lovequestionRouter from "./routes/loveroutes.js"
import religionquestionRouter from "./routes/religionroutes.js";


const app = express();
const PORT = process.env.port || 3000;

//access-control-allow-credentials:true
const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

//enable all Cross-Origin Resource Sharing (CORS) request 
app.use(cors(corsOptions));


//middleware 
app.use(morgan("dev")); //middleware to show request logs in real time.
app.use(express.static("public"));
app.use(express.json());

//middleware to send requests to router modules. 
app.use('/question', questionRouter )
app.use('/beforetheend', bfequestionRouter )
app.use('/children', childrenquestionRouter )

app.use('/family', familyquestionRouter )
app.use('/finances', financesquestionRouter )
app.use('/health', healthquestionRouter )
app.use('/love', lovequestionRouter )
app.use('/religion', religionquestionRouter )

//error handling
app.use(function (req, res, next) {
    res.status(404).json({message: "We couldn't find what you were looking for"})
  })

//attaching server to a PORT specified above.  
app.listen(PORT, function() {
    console.log(`Express server is running on Port ${PORT}`)
})

export default app;