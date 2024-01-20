import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { checkValidSigninData, checkValidSignupData } from "../utils/validations";

const Signin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const mobileNumberRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignup = () => {
    const msg = checkValidSignupData(mobileNumberRef.current.value, nameRef.current.value, emailRef.current.value);
    setErrorMessage(msg);
    //use firebase
    // navigate("/");
  }
  
  const handleSignin = () => {
    const msg = checkValidSigninData(mobileNumberRef.current.value);
    setErrorMessage(msg);
    //use firebase
    // navigate("/");
  }

  return (
    <div className="border border-black w-4/12 mt-5 m-auto rounded-md">
      <h2 className="text-4xl m-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
      <form className="m-4" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-2">
          <input
            ref={mobileNumberRef}
            className="border border-gray-400 p-3 my-2 rounded-sm w-full"
            type="text"
            placeholder="Mobile Number"
          />
          {!isSignInForm && <input
            ref={nameRef}
            className="border border-gray-400 p-3 my-2 rounded-sm w-full"
            type="text"
            placeholder="Name"
          />}
          {!isSignInForm && <input
            ref={emailRef}
            className="border border-gray-400 p-3 my-2 rounded-sm w-full"
            type="email"
            placeholder="Email"
          />}  
          <p className="text-red-500 pb-2">{errorMessage}</p> 
          {!isSignInForm && <input
            className="border border-black mr-1"
            onChange={(e) => setChecked(e.target.checked)}
            id="checkbox"
            type="checkbox"
          />}
          {!isSignInForm && <label>
            I agree to Swiggy's Terms of Service and Privacy Policy.
          </label>}
        </div>   
        <button
          // disabled={!checkValidData() && checked}
          className="bg-green-500 p-3 my-2 rounded-md w-full text-white"
          onClick={isSignInForm ? handleSignin : handleSignup}
        >
          Send OTP
        </button>
        <hr/> 
          <p className="mt-1">
            {isSignInForm ? "Already have an account?" : "New to foodie?"}
            <button className="font-bold underline ml-1" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign in" : "Create account"}
            </button>
          </p> 
      </form>
    </div>
  );
}

export default Signin;
