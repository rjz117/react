
import mongoose, { Schema } from 'mongoose';

type Menu = {
    name : string,
    flag : string
  }

const menuSchema = new Schema<Menu>({
    name: { type: String },
    flag: { type: String }
})


const menuModel = mongoose.model('menu', menuSchema)
export {menuModel}