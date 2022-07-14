
import mongoose, { Schema } from 'mongoose';

interface User {
    username : string,
    password : string,
    role : string
}

const userSchema = new Schema<User>({
    username : { type: String },
    password : { type: String },
    role : { type: String }
  });


const userModel = mongoose.model('user', userSchema)
export {userModel}