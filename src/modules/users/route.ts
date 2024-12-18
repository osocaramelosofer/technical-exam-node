import {Router} from "express"
import { listUsers, createUser, getUser, deleteUser } from "./controller"

export const userRouter = Router()

userRouter.get('', listUsers)
userRouter.post('',createUser )
userRouter.get('/', getUser)
userRouter.delete('/', deleteUser)