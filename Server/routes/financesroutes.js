import express from "express";
import getFinanceQuestions from "../models/financesModels.js"
const financesquestionRouter  = express.Router();



financesquestionRouter .get ("/", async function (req, res,){
        const result = await getFinanceQuestions();
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default financesquestionRouter ;