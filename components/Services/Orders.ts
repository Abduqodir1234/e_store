import Cart, {CartDocument} from "../../Models/cartModel";
import Orders, {OrderDocument} from "../../Models/Orders"
import CartProducts from "../../Models/CartProducts";
import {ORDER_STATUSES} from "../Variables";
import OrderProducts from "../../Models/OrderProducts";
import {ObjectId} from "mongodb";
import Users from "../../Models/Users";
import ResponseReturner from "../Responses/Response";
import ResponseWithDataBody from "../Responses/ResponseWithDataBody";
import {StatusCodes} from "http-status-codes";
import ErrorResponseBody from "../Responses/ErrorResponseBody";
import PositiveResponseBody from "../Responses/PositiveResponseBody";

class OrdersClass{

    async getPersonalOrderList(query:object,page:number,limit:number){
        try{
            let orders = await Orders.find(query)
                .skip((page-1)*limit)
                .limit(page*limit)
                .populate({path:"cardNumber",select:"name card_num"})
                .select('-product_ids -createdAt -updatedAt -__v')

            return ResponseReturner(ResponseWithDataBody(orders))
        }
        catch (e:any) {
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
        }

    }



    async getOrder(query:object) {
        try {
            let order = await Orders.findOne({...query})
                .select('-user_id -__v -createdAt -updatedAt')
                .populate(
                    {
                        path: "cardNumber", select: 'name card_num'
                    }
                )
                .populate({
                    path: "product_ids",
                    select: 'product_id count price size color',
                    populate: [
                        {path: "size", select: 'name _id'},
                        {path: "color", select: "name _id"},
                        {
                            path: "product_id",
                            select: 'name category rating photo',
                            populate: {
                                path: "category",
                                select: '_id name'
                            }
                        }
                    ]
                })
            return ResponseReturner(ResponseWithDataBody(order))
        } catch (e: any) {
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
        }
    }




    async createOrderByReq(req:any,delivery_price:number,paid:boolean){
        let user_id = req.user.username._id
        try{
            let {
                cash_card,
                coordinate,
                address,
                destination,
                cardNumber
            } = req.body

            let order_data = {
                user_id,
                cash_card,
                coordinate,
                address,
                destination:destination || "",
                cardNumber,
                product_ids:[],
                delivery_price,
                paid:cash_card === "1" ? false : paid,
                status:cash_card || paid ? ORDER_STATUSES[1] : ORDER_STATUSES[0],
            }
            let data = await Orders.create(order_data)
            return ResponseReturner(ResponseWithDataBody(data))
        }
        catch (e:any) {
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
        }
    }




    async returnerUserIdsAndOrderProducts(cartProducts:any,order_id:string){
        let object:any = []
        let users:any = []
        cartProducts.map((one:any)=>{
            let id = one._doc.product_id._id
            let price = one._doc.product_id.price
            let user_id = one._doc.product_id.vendor_id
            delete one._doc.product_id
            users.push(user_id)
            object.push({...one._doc,product_id:id,price,order_id})
        })
        console.log(object)
        return {object,users}
    }




    async create(req:any,delivery_price:number,paid:boolean){
        try{
            let user_id = req.user.username._id
            let userOrderIds =req.user.username.received_order_ids
            let {status,msg}= await this.createOrderByReq(req,delivery_price,paid)
            if(!msg.errors){
                let order:OrderDocument = msg.data
                let cart:CartDocument = await Cart.findOne({user_id:new ObjectId(user_id)})
                let cartProducts = await CartProducts.find({cart_id:cart._id})
                    .populate("product_id")
                let {users,object} = await this.returnerUserIdsAndOrderProducts(cartProducts,order._id)
                if(object.length !==0){
                    await Users.updateMany({_id:{$in:users}},{received_order_ids:[...userOrderIds,order._id]})
                    let order_products_data = await OrderProducts.insertMany(object)
                    let order_prd_ids:any = []
                    order_products_data.map(one=>order_prd_ids.push(one._id))
                    await Orders.findOneAndUpdate({_id:order._id},{product_ids:[...order_prd_ids]})
                    await CartProducts.deleteMany({cart_id:cart._id},{upsert:true})
                    return ResponseReturner(PositiveResponseBody("OK"))
                }
                else{
                    return ResponseReturner(ErrorResponseBody("Please add to cart something"),StatusCodes.BAD_REQUEST)
                }
            }
            else{
                // @ts-ignore
                ResponseReturner(ErrorResponseBody(msg.msg),status)
            }

        }
        catch (e:any) {
            ResponseReturner(ErrorResponseBody(e.message))
        }
    }

}

export default OrdersClass