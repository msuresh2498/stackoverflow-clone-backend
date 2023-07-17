import express from 'express'
import { askQuestion, getUser, postAnswer, questionlist, questions, verifyToken, votes } from "../controllers/auth.js";


const router = express.Router();


router.post('/askquestions', askQuestion);
router.post('/postanswer/:id', verifyToken, getUser, postAnswer);
router.post('/:id/vote', votes );
router.get('/questionslist', questionlist);
router.get('/:id', questions);

export default router