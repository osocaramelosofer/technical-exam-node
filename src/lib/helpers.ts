import jwt from 'jsonwebtoken';
import { UserInterface } from '../models/User';
import dotenv from 'dotenv'

dotenv.config()
const SECRET_KEY = process.env.JWT_SECRET_KEY || ''


export const generateToken = (user: UserInterface): string => {
  return jwt.sign(
    { id: user._id, email: user.email },
    SECRET_KEY,
    { expiresIn: '1 min' }
  );
};
