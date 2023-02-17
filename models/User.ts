import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export interface IUser {
  id?: ObjectId;
  firstName: string;
  middleName?: string;
  lastName: string;
  friends: IUser[];
  friendRequests: IUser[];
  profilePicURL: string;
  email: string;
  password: string;
}
const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friendRequests: [{ type: Schema.Types.ObjectId, ref: "User" }],
  profilePicURL: { type: String },
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model<IUser>("User", UserSchema);
