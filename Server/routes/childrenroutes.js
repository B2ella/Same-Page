import express from "express";
import getChildrenQuestions from "../models/childrenModels.js";
const childrenquestionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();


childrenquestionRouter.get ("/", async function (req, res,){
        const result = await getChildrenQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default childrenquestionRouter;