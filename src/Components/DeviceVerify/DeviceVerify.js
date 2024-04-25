import React from "react";
import NavBar from "../Home/NavBar";
import Forter from "../Home/Forter";

const DeviceVerify = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="text-center pt-5">
        <span className="Connecting">Connecting </span>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <Forter></Forter>
    </div>
  );
};

export default DeviceVerify;
