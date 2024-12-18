import { Request, Response } from 'express'
import { authService } from './service'


export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const token = await authService.login({email, password})
    if(!token){
      res.status(500).json({ error: "Failed to generate token" })
    }

      res.status(200).send({token}); 
  } catch (error) {
    console.error("Error during login:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
