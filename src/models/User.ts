import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
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

const User = model('User', userSchema);
export default User;