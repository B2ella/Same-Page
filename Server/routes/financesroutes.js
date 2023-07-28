import express from "express";
import getFinanceQuestions from "../models/financesModels.js"
const financesquestionRouter  = express.Router();


//handles GET request for all questions.
financesquestionRouter .get ("/", async function (req, res,){
        // calls the getFinanceQuestions() function to get all questions 
        const result = await getFinanceQuestions();
        //show result in the response object
        res.json({success: true, payload: result})
        console.log(result)
        })

        export default financesquestionRouter ;