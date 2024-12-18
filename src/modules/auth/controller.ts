import { Request, Response } from 'express'
import { authService } from './service'
import  { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const SECRET_KEY: Secret = process.env.JWT_SECRET_KEY || ""


export async function login(req: Request, res: Response): Promise<any> {
  try {
    const { email, password } = req.body;

    const foundUser = await authService.login({email, password})
    res.status(200).send(foundUser); 

  } catch (error) {
    console.error("Error during login:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
