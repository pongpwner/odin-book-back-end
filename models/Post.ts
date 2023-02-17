import mongoose, { ObjectId } from "mongoose";
import { IUser } from "./User";
const Schema = mongoose.Schema;

interface IPost {
  id?: ObjectId;
  title: string;
  content: string;
  timestamp: Date;
  author: ObjectId;
  likes: number;
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 },
});
export const Post = mongoose.model<IPost>("Post", PostSchema);
