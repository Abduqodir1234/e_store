import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Orders from "../../../Models/Orders";
import {Response} from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import {ORDERS_PAGINATION} from "../../../components/Variables";
import OrdersClass from "../../../components/Services/Orders";

let list = async (req:any,res:Response)=>{
    let orders = new OrdersClass()
    let page= req.query.page || 1
    let {user:{username:{_id}}} = req
    let {status,msg} = await orders.getPersonalOrderList({user_id:_id},page,ORDERS_PAGINATION)
    res.status(status).json(msg)
}

export default list