import React from "react";
import NavBar from "../Home/NavBar";
import Forter from "../Home/Forter";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  let navigate = useNavigate();
  return (
    <div>
      <NavBar></NavBar>
      <div onClick={() => navigate("/verifyPic")} className="text-center pt-5">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
      <Forter></Forter>
    </div>
  );
};

export default Verify;
