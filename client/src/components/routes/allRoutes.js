import AdminProducts from "../../pages/authenticated/AdminProducts";
import Cart from "../../pages/authenticated/Cart";
import LoginSignup from "../../pages/authentication/LoginSignup";
import AboutUs from "../../pages/unAuthenticatedRoutes/AboutUs";
import Brands from "../../pages/unAuthenticatedRoutes/Brands";
import Career from "../../pages/unAuthenticatedRoutes/Career";
import ContactUs from "../../pages/unAuthenticatedRoutes/ContactUs";
import Home from "../../pages/unAuthenticatedRoutes/Home";
import {
  ABOUT_US,
  ADMIN_PRODUCTS,
  BRANDS,
  CAREER,
  CART,
  CONTACT_US,
  HOME,
  SIGN_IN,
} from "../services/constants";

const authenticationRoutes = [
  {
    path: SIGN_IN,
    component: LoginSignup,
  },
];

const authenticatedUserRoutes = [
  {
    path: CART,
    component: Cart,
  },
];

const authenticatedAdminRoutes = [
  {
    path: ADMIN_PRODUCTS,
    component: AdminProducts,
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
];

export {
  authenticationRoutes,
  authenticatedUserRoutes,
  authenticatedAdminRoutes,
  unAuthenticatedRoutes,
};
