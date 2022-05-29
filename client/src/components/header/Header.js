import React, { useEffect, useState } from "react";
import { NavLink, NavItem, Nav, Button } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {
  ABOUT_US,
  BRANDS,
  CAREER,
  CONTACT_US,
  HOME,
  SIGN_IN,
  ADMIN_PRODUCTS,
  ADMIN_ORDERS,
  CART,
} from "../services/constants";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [itemCount, setItemCount] = useState(0);

  const getItemCount = () => {
    const cart = localStorage.getItem("cart");
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) setIsLogin(true);
    else setIsLogin(false);

    if (cart) {
      const items = JSON.parse(cart);
      var count = 0;
      if (items && items.data.length > 0) {
        items.data.map((val) => {
          count = count + val.quantity;
        });
      }
      setItemCount(count);
    } else {
      setItemCount(0);
    }
  };

  useEffect(() => {
    getItemCount();
    window.addEventListener("storage", getItemCount);
  }, []);

  const toggle = (tab) => {
    if (tab === "") history.push(HOME);
    else if (tab === "about-us") history.push(ABOUT_US);
    else if (tab === "brands") history.push(BRANDS);
    else if (tab === "career") history.push(CAREER);
    else if (tab === "contact-us") history.push(CONTACT_US);
    else if (tab === "admin-products") history.push(ADMIN_PRODUCTS);
    else if (tab === "admin-orders") history.push(ADMIN_ORDERS);
  };

  const getUser = () => {
    const user = localStorage.getItem("authUser");

    if (JSON.parse(user)) {
      setUser(JSON.parse(user));
      setIsLogin(true);
    } else setIsLogin(false);
  };

  useEffect(() => {
    const pathSlug = location.pathname.slice(1);

    if (activeTab !== pathSlug) setActiveTab(pathSlug);
    getUser();
    window.addEventListener("storage", getUser);
  }, []);

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex header-navs">
          <Nav pills className="navbar-active-pills">
            {user && user.role === "admin" ? (
              <>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "admin-products" ? "active" : ""}
                    onClick={() => {
                      toggle("admin-products");
                    }}
                  >
                    <span className="d-none d-sm-block">PRODUCTS</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "admin-orders" ? "active" : ""}
                    onClick={() => {
                      toggle("admin-orders");
                    }}
                  >
                    <span className="d-none d-sm-block">ORDERS</span>
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "" ? "active" : ""}
                    onClick={() => {
                      toggle("");
                    }}
                  >
                    <span className="d-none d-sm-block">HOME</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "about-us" ? "active" : ""}
                    onClick={() => {
                      toggle("about-us");
                    }}
                  >
                    <span className="d-none d-sm-block">ABOUT US</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "brands" ? "active" : ""}
                    onClick={() => {
                      toggle("brands");
                    }}
                  >
                    <span className="d-none d-sm-block">BRANDS</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "career" ? "active" : ""}
                    onClick={() => {
                      toggle("career");
                    }}
                  >
                    <span className="d-none d-sm-block">CAREER</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={activeTab === "contact-us" ? "active" : ""}
                    onClick={() => {
                      toggle("contact-us");
                    }}
                  >
                    <span className="d-none d-sm-block">CONTACT US</span>
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </div>

        <div className="login-cart-container">
          {(!user || user.role === "user") && (
            <div className="cart-container" onClick={() => history.push(CART)}>
              <ShoppingCartIcon className="cart-icon" />
              {itemCount > 0 && <p className="cart-number">{itemCount}</p>}
            </div>
          )}

          {isLogin ? (
            <Button
              className="login-button"
              onClick={() => {
                localStorage.removeItem("authUser");
                window.dispatchEvent(new Event("storage"));
                history.push(HOME);
              }}
            >
              LOGOUT
            </Button>
          ) : (
            <Button
              className="login-button"
              onClick={() => history.push(SIGN_IN)}
            >
              LOGIN
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
