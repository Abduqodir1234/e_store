import { boolean } from "joi";
import { model, Schema,Document } from "mongoose";
import { UserDocument } from "./Users";

export interface SessionDocument extends Document{
    user:UserDocument["_id"],
    valid:boolean,
    userAgent:string,
    createdAt:Date,
    updatedAt:Date,
}

let SessionSchema = new Schema({
    user:{type:Schema.Types.ObjectId,ref:"users",required:true},
    valid:{type:Boolean,required:true,default:true},
    userAgent:{type:String}
},{timestamps:true})
let Sessions = model("sessions",SessionSchema)
export default Sessions
