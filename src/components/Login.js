import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = async () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const message = checkValidData(
      emailValue,
      passwordValue,
      name.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        const user = userCredential.user;
        console.log(user);
        // dispatch(
        //   addUser({ uid: user.uid, email: user.email, password: passwordValue })
        // );

        // Redirect to Sign In after successful Sign Up
        setIsSignInForm(true);
      } else {
        // Sign In Logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        const user = userCredential.user;
        console.log(user);

        // Redirect to Browse after successful Sign In
        navigate("/browse");
      }
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = error.message;

      // Customize error messages based on error code
      if (errorCode === "auth/invalid-credential") {
        errorMessage =
          "Invalid credentials. Please check your email and password.";
      } else {
        // Handle other error cases or use the default message
        errorMessage += "-" + errorCode;
      }

      setErrorMessage(errorMessage);
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full md:w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full md:w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full md:w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-300 text-md">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full md:w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
