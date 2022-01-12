import {Router} from "express";
import {
    createDisCount,
    discountList
} from "../../../controllers/Site/discount"


import {
    discountCreateValidator
} from "../../../components/middlewares/Validators/Site/discount";
import verifyRole from "../../../components/middlewares/VerifyRoles/verifyRole";
import verifyToken from "../../../components/middlewares/verifyToken";


let DiscountRouter = Router()


DiscountRouter.route("/")
    .post(verifyToken,verifyRole,discountCreateValidator,createDisCount)
    .get(verifyToken,verifyRole,discountList)

export default DiscountRouter