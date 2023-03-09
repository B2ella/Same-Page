import express from "express"
import morgan from "morgan";
import cors from "cors";
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
// app.get("/", function(req, res) {
//     res.send("Express Here!")
// })

//access-control-allow-credentials:true
const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

//
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use('/question', questionRouter )
app.use('/beforetheend', bfequestionRouter )
app.use('/children', childrenquestionRouter )

app.use('/family', familyquestionRouter )
app.use('/finances', financesquestionRouter )
app.use('/health', healthquestionRouter )
app.use('/love', lovequestionRouter )
app.use('/religion', religionquestionRouter )

app.use(function (req, res, next) {
    res.status(404).json({message: "We couldn't find what you were looking for"})
  })

app.listen(PORT, function() {
    console.log(`Express server is running on Port ${PORT}`)
})

export default app;