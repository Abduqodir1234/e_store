import { NextFunction, Request, Response } from "express";
import upload from "../../fileUpload/file.upload";
import ErrorResponse from "../Responses/ErrorResponse";

let PhotoArrayChecker = async(
    req:any,
    res:Response,
    next:NextFunction
)=>{
    console.log(req.files)
    await upload.array("photo")(req,res,async(err)=>{
        if(err)
            ErrorResponse(res,err);
        else
            next();
    })
}


export default PhotoArrayChecker;