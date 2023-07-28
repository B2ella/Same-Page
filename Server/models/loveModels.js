//load query function from db path
import { query } from "../db/index.js"

//querying the db to select a random question from the love table
export default async function getLoveQuestions() {
    const questions = await query('SELECT question FROM love ORDER BY RANDOM() LIMIT 1;');
//@returns the first element / question in the array     
    return questions.rows[0].question;
}