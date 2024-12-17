import mongoose, {Document} from 'mongoose';
const { Schema, model } = mongoose;

export interface UserInterface extends Document {
    id: string
    name: string
    email: string
    password: string
}

const userSchema = new Schema<UserInterface>({
  id:{
    type: String,
    required: true
  },
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