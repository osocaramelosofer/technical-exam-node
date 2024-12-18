import { Request, Response } from 'express'
import { authService } from './service'


export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await authService.login({ email, password });
    if (!token) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.status(200).json({ token });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
