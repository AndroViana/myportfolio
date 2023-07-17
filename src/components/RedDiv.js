import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./RedDiv.css"; // Import the CSS file for the animation

const RedDiv = () => {
  const location = useLocation();
  const [showRedDiv, setShowRedDiv] = useState(true);

  useEffect(() => {
    const hideRedDiv = () => {
      setShowRedDiv(false);
    };

    setShowRedDiv(true);

    const timeout = setTimeout(hideRedDiv, 3000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return showRedDiv ? (
    <div className="curtain-container">
      <div className="curtain" />
      <div className="curtain" />
    </div>
  ) : null;
};

export default RedDiv;
