import {Request, Response} from 'express'
import { userService } from './service'

export async function listUsers(req:Request, res:Response){
    try {
        const page = Number(req.query.page) || 0
        const limit = Number(req.query.limit) || 3

        const usersData = await userService.list({page,limit})
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
        const { id, name, email } = req.body
        const updatedUser = await userService.update({_id:id, name, email})

        if (!updatedUser) {
            res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }else {
            res.status(200).json({
                success: true,
                message: 'user updated successfully',
                data: {name, email}
            })
        }
    } catch (error) {
        res.status(500).json({
            error:{
                message: "Something went wrong",
                code: 'Internal error'
            }
        })
    }
}