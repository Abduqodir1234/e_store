import jwt from "jsonwebtoken"
import { SessionDocument } from "../Models/Session";
import { UserDocument } from "../Models/Users";
import { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRED_DURATION } from "./Variables";
let createToken = async (userId:UserDocument["_id"],sessionId:SessionDocument["_id"])=>{
    try{
        const access_token = await jwt.sign(
            { username: userId,session:sessionId },
            ACCESS_TOKEN_SECRET,
            { expiresIn: ACCESS_TOKEN_EXPIRED_DURATION }
          );
          return access_token;
    }
    catch{
        return ""
    }
}
export default createToken;