import { query } from "../db/index.js"


export default async function getHealthQuestions() {
    const questions = await query('SELECT question FROM health ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}