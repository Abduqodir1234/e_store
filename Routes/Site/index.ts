import UserRoutes from "./User/UserRoutes";
import CardsRouter from "./Cards/cardsRouter";
import WishlistRoutes from "./Wishlist/WishlistRoutes";
import CategoryRoutes from "./ProductCategory/categoryRoutes";
import SizeRoutes from "./ProductSize/SizeRoutes";
import ColorRoutes from "./ProductColors/colorRoutes";
import DiscountRoutes from "./ProductDiscount/routes";
import cart_routes from "./Cart/routes";
import productRouter from "./Products/routes";
import orderRoute from "./Orders/routes";

export const userRoutes = UserRoutes
export const cardRoutes = CardsRouter
export const wishlistRoutes = WishlistRoutes
export const productCategoryRoutes = CategoryRoutes
export const productSizeRoutes = SizeRoutes
export const productColorRoutes = ColorRoutes
export const discountRoutes = DiscountRoutes
export const cartRoutes = cart_routes
export const productRoutes = productRouter
export const orderRoutes = orderRoute
