import express from "express";
import getBeforeTheEndQuestions from "../models/beforetheendModels.js";

const bfequestionRouter = express.Router();

//handles GET request for all questions.
bfequestionRouter.get ("/", async function (req, res,){
        // calls the getBeforeTheEndQuestions() function to get all questions 
        const result = await getBeforeTheEndQuestions();
        //show result in the response object
        res.json({success: true, payload: result}) 
        // console.log(result)
        })

        export default bfequestionRouter;