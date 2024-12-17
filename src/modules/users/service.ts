import mongoose from "mongoose";
import User, { UserInterface } from "../../models/User"

export const userService = {
    list: async():Promise< UserInterface[] | null> => {
        try {
            const query = await User.find({});
            console.log(query)
            return query
        } catch (error) {
            console.error(error)
            return null
        }
    },
    create: async({name, email, password}: Pick<UserInterface,'name'|'email'|'password'>):Promise< UserInterface | null> =>{
        try {
            const newUser = new User({
                id: new mongoose.Types.ObjectId().toString(),
                name,
                email,
                password,
              });
              await newUser.save()
              return newUser
        } catch (error) {
            console.error(error)
            return null
        }
    },
    get: async(userId: string):Promise< UserInterface | null> => {
        try {
            // const query = User.findById()
            return null
        } catch (error) {
            return null
        }
    } 
}