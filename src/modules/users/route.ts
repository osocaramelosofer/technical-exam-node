import {Router} from "express"
import { listUsers } from "./controller"

export const userRouter = Router()

userRouter.get('/', listUsers)