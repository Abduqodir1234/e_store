import jwt from "jsonwebtoken";
import {ACCESS_TOKEN_SECRET} from "./Variables";

let Decode= async (token:string)=>{
    try{
       let decoded = await jwt.verify(token,ACCESS_TOKEN_SECRET);
       return {valid:true,expired:false,decoded};
    }
    catch(e:any){
        return{
            valid:false,
            expired:true,
            decoded:null
        }
    }
}
export default Decode;