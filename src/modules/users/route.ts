import {Router} from "express"
import { listUsers, createUser } from "./controller"

export const userRouter = Router()

userRouter.get('/', listUsers)
userRouter.post('/create',createUser )