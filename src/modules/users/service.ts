import mongoose from "mongoose";
import User, { UserInterface } from "../../models/User"
import bcrypt from 'bcrypt'

export const userService = {
    list: async():Promise< UserInterface[] | null> => {
        try {
            const query = await User.find({},"name email _id");

            return query
        } catch (error) {
            console.error(error)
            return null
        }
    },
    create: async({name, email, password}: Pick<UserInterface,'name'|'email'|'password'>):Promise< UserInterface | null> =>{
        try {
            const newUser = new User({
                name,
                email,
                password: bcrypt.hashSync(password, 10),
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
            const query = await User.findById(userId,"name email _id").exec()
            return query
        } catch (error) {
            return null
        }
    }
}