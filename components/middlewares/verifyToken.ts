import jwt from "jsonwebtoken"
import Users from "../../Models/Users";
import { ACCESS_TOKEN_SECRET, TOKEN } from "../Variables";
import {NextFunction, Request,Response} from "express";
import Decode from "../decode";
import reIssueAccessToken from "../reIssueAccessToken";
import ErrorResponse from "../Responses/ErrorResponse";

const verifyToken = async(req:any, res:Response, next:NextFunction) => {
    const access_token:any = req?.headers["authorization"]?.replace(/^Bearer\s/,"")
    let refresh_token:any = req.headers["refresh"]
    if (access_token){
        let data:any = await Decode(access_token)
        console.log(data)
        if(data?.expired === false) {
            console.log(data.expired)
            req.user = data?.decoded
            next()
        }
        else if(data?.expired && refresh_token){
            let newAccessToken:any = await reIssueAccessToken(refresh_token)
            if(newAccessToken){
                res.setHeader("x-access-token",newAccessToken)
                let data = await Decode(newAccessToken)
                req.user = data.decoded
                next();
            }
            else{
                ErrorResponse(res,"Authentication Error2")
            }
        }
        else{
            ErrorResponse(res,"Authentication Error3")
        }
    }
    else{
        ErrorResponse(res,"Authentication Error")
    }


}

export default verifyToken;