import express from "express";
import getHealthQuestions from "../models/healthModels.js";
const healthquestionRouter = express.Router();

//handles GET request for all questions.
healthquestionRouter.get ("/", async function (req, res,){
        // calls the getHealthQuestions() function to get all questions 
        const result = await getHealthQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default healthquestionRouter;