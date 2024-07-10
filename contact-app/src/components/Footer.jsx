import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>Contact Manager app by Mohan Talavar</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

export default Footer;
