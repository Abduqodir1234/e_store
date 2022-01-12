import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import {
    cardCreateValidator
} from "../../../components/middlewares/Validators/Site/cards";
import {
    cardCreate,
    cardDelete,
    cardsList
} from "../../../controllers/Site/cards";

let CardsRouter = Router()

CardsRouter.route("/")
    .post(verifyToken,cardCreateValidator,cardCreate)
    .get(verifyToken,cardsList)
CardsRouter.route("/:id")
    .delete(verifyToken,cardDelete)

export default CardsRouter