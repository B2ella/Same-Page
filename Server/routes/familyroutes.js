import express from "express";
import getFamilyQuestions from "../models/familyModels.js";
const familyquestionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();


familyquestionRouter.get ("/", async function (req, res,){
        const result = await getFamilyQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default familyquestionRouter;