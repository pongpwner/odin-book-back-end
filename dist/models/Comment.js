"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, requried: true },
    post: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
});
exports.Comment = mongoose_1.default.model("Comment", CommentSchema);
