import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;
interface IComment {
  id?: ObjectId;
  user: ObjectId;
  post: ObjectId;
  content: string;
}
const CommentSchema = new Schema<IComment>({
  user: { type: Schema.Types.ObjectId, requried: true },
  post: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
});

export const Comment = mongoose.model("Comment", CommentSchema);
