import React, { Children } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

const LayoutDefault = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutDefault;
