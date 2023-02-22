import { query } from "../db/index.js"


export default async function getFinanceQuestions() {
    const questions = await query('SELECT question FROM finances ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}