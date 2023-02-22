import { query } from "../db/index.js"


export default async function getReligionQuestions() {
    const questions = await query('SELECT question FROM religion ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}