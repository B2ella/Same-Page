import express from "express";
import getChildrenQuestions from "../models/childrenModels.js";
const childrenquestionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();

//handles GET request for all questions.
childrenquestionRouter.get ("/", async function (req, res,){
        // calls the getChildrenQuestions() function to get all questions 
        const result = await getChildrenQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default childrenquestionRouter;