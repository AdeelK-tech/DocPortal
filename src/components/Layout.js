import React from "react";
import { Navigation } from "./Navigation";

export const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};
