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
});

const dataModel = mongoose.model<Data>("data", dataSchema);
export { dataModel };
