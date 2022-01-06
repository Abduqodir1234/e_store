import {Response} from "express"

let ResponseWithData = (res:Response,data:any)=>{
    return res.json({errors:false,data:data})
}
export default ResponseWithData;