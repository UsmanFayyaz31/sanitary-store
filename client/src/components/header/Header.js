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
} from "../services/constants";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  const toggle = (tab) => {
    if (tab === "") history.push(HOME);
    else if (tab === "about-us") history.push(ABOUT_US);
    else if (tab === "brands") history.push(BRANDS);
    else if (tab === "career") history.push(CAREER);
    else if (tab === "contact-us") history.push(CONTACT_US);
  };

  useEffect(() => {
    const pathSlug = location.pathname.slice(1);

    if (activeTab !== pathSlug) setActiveTab(pathSlug);
  }, []);

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex header-navs">
          <Nav pills className="navbar-active-pills">
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
          </Nav>
        </div>

        <div className="login-cart-container">
          <Button
            className="login-button"
            onClick={() => history.push(SIGN_IN)}
          >
            Login
          </Button>
          <ShoppingCartIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
