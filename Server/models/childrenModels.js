import { query } from "../db/index.js"


export default async function getChildrenQuestions() {
    const questions = await query('SELECT question FROM children ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}