import {Router} from "express"
import { listUsers, createUser, getUser } from "./controller"

export const userRouter = Router()

userRouter.get('/', listUsers)
userRouter.post('/create',createUser )
userRouter.get('/get', getUser)