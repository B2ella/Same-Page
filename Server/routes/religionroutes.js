import express from "express";
import getReligionQuestions from "../models/religionModels.js";
const religionquestionRouter = express.Router();

//handles GET request for all questions.
religionquestionRouter.get ("/", async function (req, res,){
        // calls the getReligionQuestions() function to get all questions 
        const result = await getReligionQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default religionquestionRouter;