import { query } from "../db/index.js"


export default async function getFamilyQuestions() {
    const questions = await query('SELECT question FROM family ORDER BY RANDOM() LIMIT 1;');
    return questions.rows[0].question;
}