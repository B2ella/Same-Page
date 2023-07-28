import express from "express";
import getMQuestions from "../models/themiddleModels.js";
const questionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();

//handles GET request for all questions.
       questionRouter.get ("/", async function (req, res,){
        // calls the getMQuestions() function to get all questions 
        const result = await getMQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default questionRouter;



             


//Route to GET all entries in start a clean table
// router.get("/", async function (req, res) {
//   const result = await getStartClean();
//   res.status(200).json({ success: true, payload: result.rows });
// });