import { NextFunction, Request, Response } from "express";
import upload from "../../fileUpload/file.upload";
import ErrorResponse from "../Responses/ErrorResponse";

let PhotoChecker = async(
    req:Request,
    res:Response,
    next:NextFunction
    )=>{
    await upload.single("photo")(req,res,async(err)=>{
        if(err)
            ErrorResponse(res,err);
        else
            next();
    })
}


export default PhotoChecker;