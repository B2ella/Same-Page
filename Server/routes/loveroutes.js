import express from "express";
import getLoveQuestions from "../models/loveModels.js";
const lovequestionRouter = express.Router();



lovequestionRouter.get ("/", async function (req, res,){
        const result = await getLoveQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default lovequestionRouter;