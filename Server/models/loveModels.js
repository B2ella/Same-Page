import { query } from "../db/index.js"


export default async function getLoveQuestions() {
    const questions = await query('SELECT question FROM love ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}