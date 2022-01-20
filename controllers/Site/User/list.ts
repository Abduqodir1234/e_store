import { Request, Response } from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import Users, { UserDocument } from "../../../Models/Users"
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";

let UsersList = async (req:Request,res:Response) =>{
   let users = new ModelAdditionalMethods(Users,res)
   let {msg,status}  = await users.findWithSelect({},"-password")
   res.status(status).json(msg)
}
export default UsersList