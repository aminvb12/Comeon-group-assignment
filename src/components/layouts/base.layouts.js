import React from "react";
import { assets } from "../../assets";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={assets.ComeonLogo} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <Outlet />
      </div>
    </div>
  );
};
