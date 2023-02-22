import express from "express";
import getBeforeTheEndQuestions from "../models/beforetheendModels.js";

const bfequestionRouter = express.Router();
// import { Router } from "express";
// export const questionRouter = Router();


bfequestionRouter.get ("/", async function (req, res,){
        const result = await getBeforeTheEndQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default bfequestionRouter;