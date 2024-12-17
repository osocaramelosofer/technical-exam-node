import mongoose, {Document} from 'mongoose';
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
});

const User = model<UserInterface>('User', userSchema);
export default User;