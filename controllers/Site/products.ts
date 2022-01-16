import create from "./Products/create";
import list from "./Products/list";
import get from "./Products/get";
import getAny from "./Products/getany";
import update from "./Products/update";
import search from "./Products/search";

export const productCreate = create
export const productList = list
export const productGetById = get
export const productGetByIdByAdmin = getAny
export const productUpdate = update
export const productSearch = search