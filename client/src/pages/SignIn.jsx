import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";

function SignIn() {
  // getting the auth provider
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-52 px-16 flex justify-center">
      <div className="holder shadow-xl p-20 text-gray-700 rounded-lg flex flex-col items-center">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-5xl font-semibold">Join Today 🚀</h2>
        </div>
        <div
          onClick={googleLogin}
          className="flex items-center jc-center gap-4 p-2.5 px-4 text-white rounded-md bg-gray-700 shadow-md active:scale-95 w-full cursor-pointer"
        >
          <FcGoogle className="lg:text-2xl" />
          <button className="lg:text-xl">Sign in with google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
