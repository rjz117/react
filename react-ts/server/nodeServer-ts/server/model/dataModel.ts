import mongoose, { Schema } from "mongoose";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const dataSchema = new Schema<Data>({
  userId: { type: Number },
  id: { type: Number },
  title: { type: String },
  body: { type: String },
},{ collection : 'userData' });

const dataModel = mongoose.model("data", dataSchema);
export { dataModel };
