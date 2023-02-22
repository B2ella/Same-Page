import { query } from "../db/index.js"


export default async function getBeforeTheEndQuestions() {
    const questions = await query('SELECT question FROM beforetheend ORDER BY RANDOM() LIMIT 1;');
    console.log ("Got questions!")
    // return questions.rows;
    return questions.rows[0].question;
}