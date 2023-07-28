//load query function from db path
import { query } from "../db/index.js"


//querying the db to select a random question from the religion table
export default async function getReligionQuestions() {
    const questions = await query('SELECT question FROM religion ORDER BY RANDOM() LIMIT 1;');
//@returns the first element / question in the array     
    return questions.rows[0].question;
}