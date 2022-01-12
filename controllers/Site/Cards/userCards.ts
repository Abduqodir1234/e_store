import { Response} from "express";
import Cards, {CardDocument} from "../../../Models/cards";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let UserCards =async (req:any,res:Response)=>{
    try{
        let data = await Cards.find({user_id:req.user.username._id})
        ResponseWithData(res,data)
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default UserCards