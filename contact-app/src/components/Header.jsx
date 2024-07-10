import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Contact Manager
      </h1>
    </div>
  );
};

export default Header;
