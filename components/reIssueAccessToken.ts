import Decode from "./decode";
import Sessions, {SessionDocument} from "../Models/Session";
import Users from "../Models/Users";
import createToken from "./createToken";

let ReIssueAccessToken = async (token:string)=>{
    let data:any =await Decode(token)

    let id:any = data?.decoded?.username
    if(!data.valid || !id)
        return false
    else{
        let session: any =await Sessions.findById(data.decoded.session);
        if(!session || !session?.valid)
            return false
        else{
            let user =await Users.findOne({_id:session.user}).lean();
            if(!user)
                return false
            else{
                let access_token = await createToken(user,session)
                return access_token
            }
        }
    }
}
export default  ReIssueAccessToken;