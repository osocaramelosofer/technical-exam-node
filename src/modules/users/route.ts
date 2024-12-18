import { Router } from "express"
import { listUsers, createUser, getUser, deleteUser, updateUser} from "./controller"
import { auth } from "../../middleware/auth"

export const userRouter = Router()
userRouter.get('',auth, listUsers)
userRouter.post('', createUser )
userRouter.get('/user', auth,getUser)
userRouter.delete('/',auth, deleteUser)
userRouter.put('/',auth, updateUser)