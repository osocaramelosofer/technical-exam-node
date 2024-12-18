import bcrypt from 'bcrypt';
import User from '../../models/User'
import { generateToken } from '../../lib/helpers';



export const authService = {
  login: async({email, password} : { email: string, password: string}):Promise<any> => {
    try {
      const foundUser = await User.findOne({ email })

    
      if (!foundUser) {
        throw new Error('user not found')
      }
      const isMatch = bcrypt.compareSync(password, foundUser.password);
  
      if (isMatch) {
        // HERE replace the jwt.sign with a method
        // const token = jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.name }, SECRET_KEY, {
        //   expiresIn: '2 days',
        // });
        const token = generateToken(foundUser)
   
        return { token: token };
      } else {
        throw new Error('Password is not correct');
      }
    } catch (error) {
      
    }
  }
}


