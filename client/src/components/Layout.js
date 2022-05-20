import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { useLocation } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = (props) => {
  const location = useLocation();
  const [header, setHeader] = useState(false);

  useEffect(() => {
    setHeader(true);
  }, [location.pathname]);

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <div id="layout-wrapper">
      {header && <Header />}
      <div className="body-content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
