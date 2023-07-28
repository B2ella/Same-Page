//loads query function from db path
import { query } from "../db/index.js"


//querying the db to select a random question from the middle table
export default async function getMQuestions() {
    const questions = await query('SELECT question FROM themiddle ORDER BY RANDOM() LIMIT 1;');
    console.log ("Got questions!")
//@returns the first element / question in the array 
    return questions.rows[0].question;
}
