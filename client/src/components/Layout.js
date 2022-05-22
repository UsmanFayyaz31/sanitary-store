import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import { SIGN_IN } from "./services/constants";

const Layout = (props) => {
  const location = useLocation();
  const [header, setHeader] = useState(false);
  const [footer, setFooter] = useState(true);

  useEffect(() => {
    setHeader(true);
    if (location.pathname === SIGN_IN) setFooter(false);
  }, [location.pathname]);

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <div id="layout-wrapper">
      {header && <Header />}
      <div className="body-content">{props.children}</div>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
