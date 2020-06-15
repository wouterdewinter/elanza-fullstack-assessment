import React from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";

function Homepage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (!user) {
    return (
      <div className="main">
        <Button
          variant="outline-info"
          size="lg"
          onClick={() => dispatch(setUser("client"))}
        >
          I am a client
        </Button>{" "}
        <Button
          variant="outline-info"
          size="lg"
          onClick={() => dispatch(setUser("careGiver"))}
        >
          I am a caregiver
        </Button>
      </div>
    );
  }
  return <Redirect to="/all-care-requests" />;
}

export default Homepage;
