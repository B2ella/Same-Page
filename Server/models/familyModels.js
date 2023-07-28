//load query function from db path
import { query } from "../db/index.js"

//querying the db to select a random question from the family table
export default async function getFamilyQuestions() {
    const questions = await query('SELECT question FROM family ORDER BY RANDOM() LIMIT 1;');
//@returns the first element / question in the array     
    return questions.rows[0].question;
}