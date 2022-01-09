import { Request,Response} from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse"
import MainCodeCheck from "../../../components/MainCodeCheck"
import createToken from "../../../components/createToken"
import CreateSession from "../../../components/createSessions"
import { SessionDocument } from "../../../Models/Session"
import createRefreshToken from "../../../components/createRefreshToken"
import ResponseWithData from "../../../components/Responses/ResponseWithData";
let Login = async(req:Request,res:Response)=>{
    let {email,password} = await req.body
    let user:any = await MainCodeCheck(res,email,password)
    await user?.matchPassword(password,async(err:any,isMatch:any)=>{
        if(err){
            ErrorResponse(res,err)
        }
        if(!isMatch){
            ErrorResponse(res,"Incorrect password")
        }
        else{
            let session:SessionDocument = await CreateSession(user?._id,req?.headers["user-agent"] || "")
            let access_token = await createToken(user._id,session._id)
            let refresh_token = await createRefreshToken(user._id,session._id)
            ResponseWithData(res,{"access_token":access_token,"refresh_token":refresh_token})

        }
    })

    
}
export default Login