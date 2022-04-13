import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="text-center mt-5">
        <small>copyright @ {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};

export default Footer;
