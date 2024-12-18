import { Router } from "express"
import { listUsers, createUser, getUser, deleteUser, updateUser} from "./controller"
import { auth } from "../../middleware/auth"

export const userRouter = Router()
userRouter.use(auth)
userRouter.get('', listUsers)
userRouter.post('',createUser )
userRouter.get('/', getUser)
userRouter.delete('/', deleteUser)
userRouter.put('/', updateUser)