import express from "express";
import getReligionQuestions from "../models/religionModels.js";
const religionquestionRouter = express.Router();


religionquestionRouter.get ("/", async function (req, res,){
        const result = await getReligionQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default religionquestionRouter;