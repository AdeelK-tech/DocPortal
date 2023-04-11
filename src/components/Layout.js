import React from "react";
import { Navigation } from "./Navigation";
import Footer from "./Footer";

export const Layout = (props) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};
