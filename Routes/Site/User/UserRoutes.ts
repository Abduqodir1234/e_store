import {Router} from "express"
import PhotoChecker from "../../../components/middlewares/PhotoChecker"
import verifyToken from "../../../components/middlewares/verifyToken";

import {
    adminUserUpdateValidator,
    userUpdateValidator,
    userCreateValidator,
    loginValidator
} from "../../../components/middlewares/Validators/Site/users"


import {
    userRegister,
    userList,
    login,
    logout,
    getUser,
    userDelete,
    userGetByid,
    userUpdate,
    userUpdateById
} from "../../../controllers/Site/user"
import isSuperAdmin from "../../../components/middlewares/VerifyRoles/isSuperAdmin";
let UserRoutes = Router()



UserRoutes.post("/",PhotoChecker,userCreateValidator,userRegister)
UserRoutes.get("/list",verifyToken,isSuperAdmin,userList)
UserRoutes.post('/login',loginValidator,login)
UserRoutes.get("/get.ts",verifyToken,getUser)
UserRoutes.patch("/update",verifyToken,PhotoChecker,userUpdateValidator,userUpdate)
UserRoutes.delete("/delete/:id",verifyToken,isSuperAdmin,userDelete)
UserRoutes.post("/logout",verifyToken,logout)
UserRoutes.get("/get.ts/id/:id",verifyToken,isSuperAdmin,userGetByid)
UserRoutes.patch("/update/id/:id",verifyToken,isSuperAdmin,PhotoChecker,adminUserUpdateValidator,userUpdateById)



export default UserRoutes