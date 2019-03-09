import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer bg-dark text-white mt-5 p-4 text-center">
      <h6> Copyright &copy; {new Date().getFullYear()} to do </h6>
    </div>
  );
};

export default Footer;
