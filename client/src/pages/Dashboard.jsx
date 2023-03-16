import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        auth.signOut();
        navigate(`/auth/signin`);
      }}
      className="cursor-pointer pt-36"
    >
      sign out
    </div>
  );
}

export default Dashboard;
