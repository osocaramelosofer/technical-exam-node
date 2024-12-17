import mongoose from "mongoose";
import User, { UserInterface } from "../../models/User"

export const userService = {
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
    }
}