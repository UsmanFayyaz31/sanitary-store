const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://sanitary-store.herokuapp.com";

// authentication routes
export const SIGN_IN = "/sign-in";

//authenticated routes
export const CART = "/cart";
export const ADMIN_PRODUCTS = "/admin-products";

//un-authenticated routes
export const HOME = "/";
export const ABOUT_US = "/about-us";
export const BRANDS = "/brands";
export const CAREER = "/career";
export const CONTACT_US = "/contact-us";

//endPoints
export const SIGN_IN_API = BASE_URL + "/api/sign-in/";
export const SIGN_UP_API = BASE_URL + "/api/sign-up/";
export const PRODUCT = BASE_URL + "/api/product/";
