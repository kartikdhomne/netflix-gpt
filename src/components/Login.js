import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? (
            <>
              {" "}
              <span className="text-gray-400">New to Netflix?</span>{" "}
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                Sign up now.
              </span>
            </>
          ) : (
            <>
              {" "}
              <span className="text-gray-400">Already registered?</span>{" "}
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
