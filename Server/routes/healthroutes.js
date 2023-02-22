import express from "express";
import getHealthQuestions from "../models/healthModels.js";
const healthquestionRouter = express.Router();


healthquestionRouter.get ("/", async function (req, res,){
        const result = await getHealthQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default healthquestionRouter;