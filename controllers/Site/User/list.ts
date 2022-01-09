import { Request, Response } from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import Users, { UserDocument } from "../../../Models/Users"
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let UsersList = async (req:Request,res:Response) =>{
   try{
      let users:any =  await Users.find().select(["-password"])
      users?.forEach((one:UserDocument)=>{
         one.photo = `${req.protocol }://${req.get('host')}/${one.photo}`
      })
      ResponseWithData(res,users)
   }
   catch(e:any){
      ErrorResponse(res,e.message)
   }
}
export default UsersList