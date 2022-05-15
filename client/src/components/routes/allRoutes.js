import Cart from "../../pages/authenticated/Cart";
import LoginSignup from "../../pages/authentication/LoginSignup";
import Home from "../../pages/unAuthenticatedRoutes/Home";
import { CART, HOME, SIGN_IN } from "../services/constants";

const authenticationRoutes = [
  {
    path: SIGN_IN,
    component: LoginSignup,
  },
];

const authenticatedRoutes = [
  {
    path: CART,
    component: Cart,
  },
];

const unAuthenticatedRoutes = [
  {
    path: HOME,
    component: Home,
    exact: true,
  },
];

export { authenticationRoutes, authenticatedRoutes, unAuthenticatedRoutes };
