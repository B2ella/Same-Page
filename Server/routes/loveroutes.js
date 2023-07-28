import express from "express";
import getLoveQuestions from "../models/loveModels.js";
const lovequestionRouter = express.Router();


//handles GET request for all questions.
lovequestionRouter.get ("/", async function (req, res,){
        // calls the getLoveQuestions() function to get all questions 
        const result = await getLoveQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default lovequestionRouter;