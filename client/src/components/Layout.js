import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { useLocation } from "react-router-dom";

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
      <div style={{ marginTop: "60px" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
