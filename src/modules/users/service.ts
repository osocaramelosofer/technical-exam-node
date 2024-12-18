import mongoose from "mongoose";
import User, { UserInterface } from "../../models/User"
import bcrypt from 'bcrypt'

export const userService = {
    list: async({page, limit} : {page: number, limit:number}):Promise<UserInterface[] | null> => {
        try {
            const query = await User.find({})
            .skip(page * limit)
            .limit(limit)
            .select({name: 1,email:1, _id:1})
            .exec();

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
                password,
              })
              await newUser.save()
              return newUser
        } catch (error) {
            console.error(error)
            return null
        }
    },
    get: async(id: string):Promise<UserInterface | null> => {
        try {
            const query = await User.findById(id,"name email _id").exec()
            return query
        } catch (error) {
            return null
        }
    },
    delete: async(id:string):Promise<UserInterface | null> => {
        try {
            // check if id is a valid ObjectId
            if(!mongoose.isValidObjectId(id)){
                return null
            }

            const deletedUser = await User.findByIdAndDelete(id).exec()
            // user not found
            if(!deletedUser){
                return null
            }
            
            return deletedUser
        } catch (error) {
            const message = error instanceof Error ? error.message : error
            console.error("Error deleting user:",message)
            return null
        }
    },
    update: async({_id, name, email}:Pick<UserInterface, 'name'| 'email' | '_id'>): Promise<UserInterface | null> => {
        try {
            const updatedUser = await User.findByIdAndUpdate(_id, {name, email}).exec()
            if(!updatedUser){
                return null
            }
            return updatedUser
        } catch (error) {
            console.error(error)
            return null   
        }
    }
}