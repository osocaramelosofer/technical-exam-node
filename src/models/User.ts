import mongoose, {Document} from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema, model } = mongoose;

export interface UserInterface extends Document {
    _id:  mongoose.Schema.Types.ObjectId
    name: string
    email: string
    password: string
}

const userSchema = new Schema<UserInterface>({
  name:{
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
userSchema.pre('save',async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = model<UserInterface>('User', userSchema)
export default User