import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import {
    cartAmountChange,
    cartProductsList
} from "../../../controllers/Site/cart";
import change_amount_validation from "../../../components/middlewares/Validators/Site/Cart/change_amount_validation";

let cart_routes = Router()


cart_routes.route("/")
    .post(verifyToken,change_amount_validation,cartAmountChange)
    .get(verifyToken,cartProductsList)


export default cart_routes