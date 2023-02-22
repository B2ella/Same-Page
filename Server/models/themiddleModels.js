import { query } from "../db/index.js"

//Function to GET entire start a clean table
export default async function getMQuestions() {
    const questions = await query('SELECT question FROM themiddle ORDER BY RANDOM() LIMIT 1;');
    console.log ("Got questions!")
    // return questions.rows;
    return questions.rows[0].question;
}
