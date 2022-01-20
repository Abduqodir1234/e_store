import {Response} from "express"
import {ObjectId} from "mongodb";
import OrdersClass from "../../../components/Services/Orders";
let get = async (req:any,res:Response)=>{
    let {id} = req.params
    let {username:{_id}} = req.user
    let orders = new OrdersClass()
    let {msg,status} = await orders.getOrder({_id:new ObjectId(id),user_id:new ObjectId(_id)})
    return res.status(status).json(msg)

}
export default get