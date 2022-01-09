import {Router} from "express";
import verifyToken from "../../components/middlewares/verifyToken";
import verifyRole from "../../components/middlewares/VerifyRoles/verifyRole";
import {sellersCreateValidator} from "../../components/middlewares/Validators/SellersDashboard/sellers";
import {SellersCreateOrRegister, sellersList} from "../../controllers/SellersDashboard/sellers";

let SellersRoutes = Router()

SellersRoutes.route("/")
    .post(verifyToken,verifyRole,sellersCreateValidator,SellersCreateOrRegister)
    .get(verifyToken,verifyRole,sellersList)


export default SellersRoutes