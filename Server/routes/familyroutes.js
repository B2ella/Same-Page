import express from "express";
import getFamilyQuestions from "../models/familyModels.js";
const familyquestionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();


familyquestionRouter.get ("/", async function (req, res,){
        // calls the getFamilyQuestions() function to get all questions 
        const result = await getFamilyQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default familyquestionRouter;