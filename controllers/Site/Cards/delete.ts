import {Response} from "express";
import Cards from "../../../Models/cards";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

const Carddelete = async (req:any,res:Response)=>{
    try{
        const {id} = req.params
        const deleted = await Cards.findOneAndDelete(
            {
                    _id:id,
                    user_id:req.user.username._id
                }
        )
        if(!deleted){
            ErrorResponse(res,"No card with this id")
        }
        else{
            PositiveResponse(res,"Deleted",StatusCodes.OK)
        }
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default Carddelete