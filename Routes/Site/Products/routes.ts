import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import PhotoArrayChecker from "../../../components/middlewares/PhotoArrayCheck";
import {
    productCreate,
    productGetById,
    productGetByIdByAdmin,
    productList,
    productSearch,
    productUpdate
} from "../../../controllers/Site/products";
import product_create_validation from "../../../components/middlewares/Validators/Site/Products/create";
import isSuperAdmin from "../../../components/middlewares/VerifyRoles/isSuperAdmin";
import product_update_validation from "../../../components/middlewares/Validators/Site/Products/update";

let productRouter = Router()

productRouter.route("/")
    .post(verifyToken,isMerchantOrHigher,PhotoArrayChecker,product_create_validation,productCreate)
    .get(productList)

productRouter.route("/search")
    .get(productSearch)

productRouter.route("/:id")
    .get(verifyToken,isMerchantOrHigher,productGetById)
    .patch(verifyToken,isMerchantOrHigher,PhotoArrayChecker,product_update_validation,productUpdate)

productRouter.route("/id/:id")
    .get(verifyToken,isSuperAdmin,productGetByIdByAdmin)




export default productRouter