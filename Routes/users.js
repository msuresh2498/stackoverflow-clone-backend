import express from 'express'

import { signup, login, sendpasswordlink, passwordReset, changePassword, verifyToken, getUser, userData } from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signup)

router.post('/login', login);
router.post('/sendpasswordlink', sendpasswordlink);
router.post('/forgotpassword/:id/:token', passwordReset);
router.post('/:id/:token', changePassword);
router.get('/userdata/:id', userData);
router.get('/verifytoken', verifyToken, getUser);




export default router