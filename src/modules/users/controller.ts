import {Request, Response} from 'express'
import { userService } from './service'

export async function listUsers(req:Request, res:Response){
    try {
        const usersData = await userService.list()
        res.status(200).json({ data: usersData })
    } catch (error) {
        
    }
}

export async function createUser(req:Request, res:Response){
    try {
        const { name, email, password } = req.body
        const createdUser = await userService.create({name,email,password}) 
        res.status(200).json({ data: createdUser })
    } catch (error) {
        res.status(500).json({
            error:{
                message: "Something went wrong",
                code: 'Internal error'
            }
        })
    }
}
export async function getUser(req:Request, res:Response){
    try {
        const { id } = req.query
        const userDetail = await userService.get(id as string)
        res.status(200).json({data: userDetail})
    } catch (error) {
        res.status(500).json({
            error:{
                message: "Something went wrong",
                code: 'Internal error'
            }
        })
    }
}

export async function deleteUser(req:Request, res:Response){
    try {
        const { id } = req.query
        const deletedUser = await userService.delete(id as string)
        res.status(200).json({data: deletedUser})
    } catch (error) {
        res.status(500).json({
            error:{
                message: "Something went wrong",
                code: 'Internal error'
            }
        })
    }
}
export async function updateUser(req:Request, res:Response){
    try {
        
    } catch (error) {
        
    }
}