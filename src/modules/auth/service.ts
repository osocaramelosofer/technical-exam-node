import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/User'
import dotenv from 'dotenv'

dotenv.config()
const SECRET_KEY = process.env.JWT_SECRET_KEY || ''

const TOKEN_EXPIRATION = "1h"

export const authService = {
  login: async({email, password} : { email: string, password: string}):Promise<any> => {
    try {
      const foundUser = await User.findOne({ email })

    
      if (!foundUser) {
        throw new Error('user not found')
      }
      const isMatch = bcrypt.compareSync(password, foundUser.password);
  
      if (isMatch) {
        const token = jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.name }, SECRET_KEY, {
          expiresIn: '2 days',
        });
   
        return { user: { ...foundUser}, token: token };
      } else {
        throw new Error('Password is not correct');
      }
    } catch (error) {
      
    }
  }
}

// export const generateToken = (user: UserInterface): string => {
//   return jwt.sign(
//     { id: user._id, email: user.email },
//     SECRET_KEY,
//     { expiresIn: TOKEN_EXPIRATION }
//   );
// };
