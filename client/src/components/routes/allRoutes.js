import AdminOrders from "../../pages/authenticated/AdminOrders";
import AdminProducts from "../../pages/authenticated/AdminProducts";
import Cart from "../../pages/authenticated/Cart";
import LoginSignup from "../../pages/authentication/LoginSignup";
import AboutUs from "../../pages/unAuthenticatedRoutes/AboutUs";
import Brands from "../../pages/unAuthenticatedRoutes/Brands";
import Career from "../../pages/unAuthenticatedRoutes/Career";
import ContactUs from "../../pages/unAuthenticatedRoutes/ContactUs";
import Home from "../../pages/unAuthenticatedRoutes/Home";
import ProductDetail from "../../pages/unAuthenticatedRoutes/ProductDetail";
import {
  ABOUT_US,
  ADMIN_ORDERS,
  ADMIN_PRODUCTS,
  BRANDS,
  CAREER,
  CART,
  CONTACT_US,
  HOME,
  PRODUCT,
  SIGN_IN,
} from "../services/constants";

const authenticationRoutes = [
  {
    path: SIGN_IN,
    component: LoginSignup,
  },
];

const authenticatedUserRoutes = [];

const authenticatedAdminRoutes = [
  {
    path: ADMIN_PRODUCTS,
    component: AdminProducts,
  },
  {
    path: ADMIN_ORDERS,
    component: AdminOrders,
  },
];

const unAuthenticatedRoutes = [
  {
    path: ABOUT_US,
    component: AboutUs,
  },
  {
    path: BRANDS,
    component: Brands,
  },
  {
    path: CAREER,
    component: Career,
  },
  {
    path: CONTACT_US,
    component: ContactUs,
  },
  {
    path: HOME,
    component: Home,
  },
  {
    path: PRODUCT,
    component: ProductDetail,
  },
  {
    path: CART,
    component: Cart,
  },
];

export {
  authenticationRoutes,
  authenticatedUserRoutes,
  authenticatedAdminRoutes,
  unAuthenticatedRoutes,
};
