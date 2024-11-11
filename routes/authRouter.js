import {Router} from 'express'
import {signup,login, me} from "../Controller/authController.js"
import { authmidd } from '../middleware/auth.js';

const authRoutes=Router();

authRoutes.post('/signup',signup)
authRoutes.post('/login',login)
authRoutes.get('/me',authmidd,me);

export default authRoutes;