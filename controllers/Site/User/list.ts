import { Request, Response } from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import Users, { UserDocument } from "../../../Models/Users"

let UsersList = async (req:Request,res:Response) =>{
   let users:any =  await Users.find().select(["-password"])
   users?.forEach((one:UserDocument)=>{
      one.photo = `${req.protocol }://${req.get('host')}/${one.photo}`
   })
   ResponseWithData(res,users)
}
export default UsersList