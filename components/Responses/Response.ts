import {StatusCodes} from "http-status-codes";
import {ResponseBodyDocument} from "./ResponseDocument";

let ResponseReturner = (msg:ResponseBodyDocument,status=StatusCodes.OK)=>{
    return {status,msg}
}
export default ResponseReturner