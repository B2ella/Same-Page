//load query function from db path
import { query } from "../db/index.js"

//querying the db to select a random question from the children table
export default async function getChildrenQuestions() {
    const questions = await query('SELECT question FROM children ORDER BY RANDOM() LIMIT 1;');
//@returns the first element / question in the array     
    return questions.rows[0].question;
}