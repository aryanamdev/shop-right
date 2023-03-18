import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { GrMail } from "react-icons/gr";
import { BiLogOutCircle } from "react-icons/bi";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-8 px-10 flex justify-center">
        <div className="holder shadow-xl p-10  lg:p-20 lg:px-32 text-gray-700 rounded-lg flex flex-col items-center">
          <div className="mb-20">
            <h2 className="text-xl flex gap-3 items-center lg:text-3xl font-semibold text-center pl-7 text-teal-700">
              Dashboard <RxDashboard />
            </h2>
            <div className="pt-10 dashboard-items gap-5 flex items-start flex-col">
              <div className="item w-full justify-center items-center flex gap-5">
                <div className="p-2 bg-gray-100 rounded-md">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
              <div className="item items-center flex gap-5">
                <div>
                  <GrMail />
                </div>
                <div className="p-2 bg-gray-100 rounded-md">{user.email}</div>
              </div>
              <div className="item items-center flex gap-5">
                <div>
                  <FaUserAlt />
                </div>
                <div className="p-2 bg-gray-100 rounded-md">
                  {user.displayName}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              auth.signOut();
              navigate(`/auth/signin`);
            }}
            className="cursor-pointer flex items-center gap-2 text-lg font-bold text-red-600 uppercase text-center "
          >
            sign out <BiLogOutCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
