import Users, { UserDocument } from "../Models/Users";
import ErrorResponse from "./Responses/ErrorResponse";
import {Response} from "express"

let MainCodeCheck = async(res:Response,email:UserDocument["email"],password:UserDocument["password"])=>{
    try{
        let user:UserDocument = await Users.findOne({email:email})
        if(!user){
            ErrorResponse(res,'User not found')
            return false;
        }
        else{
            return user
        }
        
    }
    catch(e){
        return e
    }

}
export default MainCodeCheck;