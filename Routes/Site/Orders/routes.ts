import {Router} from "express";
import {bookOrder, personalOrderByid, userOrdersList} from "../../../controllers/Site/orders";
import verifyToken from "../../../components/middlewares/verifyToken";
import {orderCreateValidator} from "../../../components/middlewares/Validators/Site/orders";

let orderRoute = Router()


orderRoute.route("/").post(verifyToken,orderCreateValidator,bookOrder).get(verifyToken,userOrdersList)
orderRoute.route("/:id").get(verifyToken,personalOrderByid)

export default orderRoute