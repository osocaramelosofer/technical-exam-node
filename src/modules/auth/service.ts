import bcrypt from 'bcrypt'
import User from '../../models/User'
import { generateToken } from '../../lib/helpers'



export const authService = {
  login: async({email, password} : { email: string, password: string}):Promise<string | null> => {
    try {
      const foundUser = await User.findOne({ email })

    
      if (!foundUser) {
        throw new Error('user not found')
      }
      const isMatch = bcrypt.compareSync(password, foundUser.password);
  
      if (isMatch) {
        const token = generateToken(foundUser)
   
        return token
      } else {
        throw new Error('Password is not correct')
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : error
      console.error("Something went wrong generating the token:", message)
      return null
    }
  }
}


