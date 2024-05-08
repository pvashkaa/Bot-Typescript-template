import { Schema, Document, model } from "mongoose";

export type UserDocument = Document & {
    guildId: string;
    userId: string;
    voice: number;
   Messages: number;
   xp: number;
   lvl: number;
  };



export const UserSchema = new Schema<UserDocument >({
  guildId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  lvl: {
    type: Number,
    default:1,
  },
xp: {
   type: Number,
    default:0,
  },
Messages: {
     type: Number,
    default:0,
  },
voice: {
    type: Number,
    default:0,
  },
});

export const UserModel = model<UserDocument>("users", UserSchema);